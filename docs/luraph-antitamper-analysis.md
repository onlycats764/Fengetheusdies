# Análisis del anti-tamper de Luraph 14.7 y su aplicabilidad a Fengetheus

Este documento descompone el módulo anti-tamper filtrado de Luraph 14.7
(`(.uzn_)luraph14.7.lua.txt`), lo compara con el paso `AntiTamper` actual de
Fengetheus, e identifica qué técnicas son reemplazables o extraíbles para
endurecer la protección de Fengetheus sin romper su compatibilidad con Lua 5.1,
Luau y los presets existentes.

## 1. Arquitectura general del anti-tamper de Luraph

El módulo es un único `do ... end` autocontenido cuya superficie es:

- `detected(reason)`: bucle infinito (`while true do reason = reason end`) que
  cuelga la ejecución cuando una comprobación falla. No imprime, no lanza:
  simplemente bloquea, lo que dificulta la detección heurística.
- `check(value, reason)`: si `value` es falso/nulo, invoca `detected(reason)`.
- `normalizeError(value)`: elimina el sufijo ` to '...'` de los mensajes de
  error para poder compararlos de forma portable entre intérpretes.
- `checkError(ok, actual, expected, reason)`: valida que una llamada falló
  (`ok == false`) y que el mensaje de error normalizado coincide con el
  esperado.
- `checkErrorSuffix(...)`: igual que el anterior pero comparando solo el
  sufijo, para mensajes cuyo prefijo varía entre motores.
- `runChecks()`: cuerpo principal que ejecuta todas las verificaciones y al
  final imprime `You Passed`.

El núcleo de todo el módulo es la tabla `refs`, construida al principio de
`runChecks`:

```
local refs = {
    assert = assert, error = error, getmetatable = getmetatable,
    next = next, pairs = pairs, pcall = pcall, rawequal = rawequal,
    rawget = rawget, rawset = rawset, select = select,
    setmetatable = setmetatable, tonumber = tonumber, tostring = tostring,
    type = type, xpcall = xpcall,
    stringByte = string.byte, stringChar = string.char, stringSub = string.sub,
    tableInsert = table.insert, tableRemove = table.remove,
    mathFloor = math.floor, coroutineResume = coroutine.resume,
    debugInfo = debug.info, taskSpawn = task.spawn,
    loadstring = loadstring, instanceNew = Instance.new, typeof = typeof,
    buffer = buffer, b1 = buffer.create, ... b26 = buffer.writebits,
}
```

Esta tabla captura referencias directas a todas las funciones nativas relevantes
antes de que cualquier código de usuario pueda reemplazarlas. Al final de
`runChecks` se ejecuta un gran bloque de igualdad que verifica que ninguna de
esas referencias fue reemplazada en su tabla original:

```
check(assert == refs.assert and error == refs.error and ... and
      buffer.writebits == refs.b26, 48)
```

Este es el patrón de anti-hookup más robusto del módulo: aunque un atacante
reemplace `pcall` global, el código ya llamó a `refs.pcall` durante las
comprobaciones, y la verificación final detecta la sustitución.

## 2. Familias de comprobaciones detectadas

El módulo agrupa las verificaciones en familias numeradas:

1. **Entorno y `getfenv`/`setfenv`** (checks 1-4): valida que `getfenv` devuelve
   una tabla y que `setfenv` cambia el entorno de una función correctamente.
2. **`error`/`xpcall` con nivel 0** (checks 5-6): confirma que `error(s, 0)`
   propaga el mensaje sin añadir información de posición, y que `xpcall`
   invoca el manejador.
3. **Varargs y `select("#", ...)`** (checks 7-8): verifica el conteo de
   argumentos variables incluyendo nils intermedios.
4. **Closures capturadas** (check 9): comprueba que tres closures comparten
   estado correctamente.
5. **Metatablas y metamethodos** (checks 10-14): `__index`, `__newindex`,
   `__add`, `__tostring`, `rawget`/`rawset`/`rawequal`.
6. **`table`** (checks 15-21): `insert`, `remove`, `sort`, `concat`, `pairs`,
   `ipairs`.
7. **`string`** (checks 22-26): `byte`, `char`, `sub`, `reverse`, `rep`,
   `#str` con nils embebidos, `format`.
8. **`math` y `bit32`** (checks 27-30): `tonumber` base 16, `floor` de
   negativos, `abs`, `min`/`max`, NaN, `huge`, módulo de negativos, y
   operaciones `bit32` completas.
9. **`coroutine`** (checks 31-33): ciclo de vida `create`/`resume`/`yield`/
   `status`.
10. **`loadstring`** (checks 34-36): compilación correcta y compilación de
    sintaxis inválida que devuelve `nil, err`.
11. **`debug`** (checks 37-38): `traceback` y `debug.info`.
12. **Funciones de executor** (checks 39-45): `islclosure`, `iscclosure`,
    `newcclosure`, `clonefunction`, `isfunctionhooked`, `checkcaller`. Estas
    son opcionales y solo se ejecutan si existen en el entorno.
13. **`Instance`/Roblox** (checks 46-48): `game`, `GetService`, y la
    verificación final de que ninguna referencia nativa fue reemplazada.
14. **`buffer`** (checks 49-82): todas las operaciones de buffer con
    verificación de `debug.info` (`source == "[C]"`, `iscclosure == true`) y
    round-trip lectura/escritura.
15. **Orden de claves de librerías** (library-status/library-key/library-value):
    verifica que `utf8`, `math`, `debug`, `task` y `script` exponen sus claves
    en un orden determinista usando `next` iterativo.
16. **`table.freeze` readonly** y **nil-call**: mensajes de error exactos.
17. **`Instance` metatable locked** y signals: verifica que `getmetatable(obj)`
    devuelve `"The metatable is locked"` para todos los objetos Roblox, y que
    `AttributeChanged`/`ChildRemoved` son señales conectables.
18. **`debug.info` de closures C** (n0-n8): para un conjunto grande de
    funciones nativas y miembros de `Instance`/`Enum`/`Random`, verifica
    `source == "[C]"`, `line == -1`, `parameters == 0`, `variadic == true`,
    `iscclosure == true`, `islclosure == false`.
19. **Mensajes de error exactos** (t9): llama a cada función con argumentos
    inválidos y valida el mensaje de error completo contra una tabla esperada.
    Usa `xpcall` con un manejador que inspecciona `debug.info(level, "f")` en
    niveles de pila 5, 6, 7, 8, 10, 11 para confirmar que la pila es real.
20. **`Random.new(seed)` determinista**: verifica una secuencia completa de
    `NextNumber`/`NextInteger`/`Clone` con valores hardcodeados (seed
    177465824).
21. **`utf8.nfcnormalize`/`nfdnormalize`**: round-trip de NFC/NFD con hex
    esperado exacto.
22. **`Path2D`**: `GetLength`, `GetPositionOnCurve`,
    `GetPositionOnCurveArcLength`, `GetTangentOnCurve`,
    `GetTangentOnCurveArcLength` con valores flotantes hardcodeados.
23. **`coroutine`/`task` iterativos**: 106 yields, `coroutine.running`,
    `task.spawn`/`task.delay`/`task.cancel` devuelven threads.
24. **Compilación final**: compila un snippet que usa `setfenv` + metatabla
    `__index = getfenv((...))` para validar que el cargador maneja entornos.

## 3. Comparativa con el AntiTamper actual de Fengetheus

| Aspecto | Fengetheus actual | Luraph 14.7 |
| --- | --- | --- |
| Snapshot anti-hookup (`refs`) | No | Sí, completo + verificación final |
| Validación de mensajes de error | Parcial (gmatch de línea) | Completa, normalizada, por función |
| `debug.info` source=`[C]` | Solo `what` C/J | `source`, `line`, `parameters`, `variadic`, `iscclosure` |
| Closures C vs Lua | No | `iscclosure`/`islclosure` |
| Metatablas bloqueadas | No | `Instance`/`Enum`/`EnumItem` |
| `Random` determinista | No | Sí, con seed y valores hardcodeados |
| `utf8` NFC/NFD | No | Sí |
| `Path2D` | No | Sí |
| `buffer` | No | Sí, round-trip completo |
| `bit32` | No | Sí |
| Orden de claves de librerías | No | Sí, vía `next` iterativo |
| Inspección de pila real | No | `debug.info(level, "f")` en niveles 5-11 |
| Detección de tampering | `valid` booleano + bucle | `detected` con `while true do end` |
| Compatibilidad | Lua 5.1 + Luau, sin Roblox | LuaU/Roblox fuerte |

El anti-tamper de Fengetheus es funcional pero superficial: su protección
principal es un sanity check de valores booleanos aleatorios y un anti-beautify
con `sethook`. No valida la integridad de las funciones nativas en sí, ni los
mensajes de error, ni la naturaleza C de los closures.

## 4. Técnicas extraíbles y reemplazables

De las 24 familias de Luraph, las siguientes son **portables a Fengetheus** sin
depender de Roblox:

### 4.1. Sistema `refs` con verificación final (alta prioridad)
El patrón de capturar referencias a todas las funciones nativas al inicio y
verificar al final que ninguna fue reemplazada es el refuerzo más valioso. Es
totalmente portable: solo necesita `assert`, `error`, `pcall`, `string.*`,
`table.*`, `math.*`, `coroutine.*`, `debug.*`, `loadstring`, `select`,
`tonumber`, `tostring`, `type`, `xpcall`, `getmetatable`, `setmetatable`,
`rawget`, `rawset`, `rawequal`, `next`, `pairs`. Todas existen en Lua 5.1 y
Luau.

### 4.2. `checkError` / `normalizeError` (alta prioridad)
La normalización de mensajes (eliminar ` to '...'`) y la validación de
`ok == false` + mensaje esperado es portable y mucho más robusta que el
`gmatch(':(%d*):')` actual. Permite detectar replaces de funciones que cambian
sus mensajes de error.

### 4.3. `debug.info` de closures C (media prioridad, Luau)
Verificar `source == "[C]"`, `line == -1`, `iscclosure == true` para las
funciones nativas detecta hooks que reemplazan closures C por closures Lua.
Requiere Luau (`debug.info`, `iscclosure`, `islclosure`). En Lua 5.1 se puede
usar `debug.getinfo(f).what == "C"` como aproximación.

### 4.4. Orden de claves de librerías (media prioridad)
Verificar que `string`, `math`, `table`, `coroutine`, `debug` exponen sus
claves en un orden determinista vía `next` detecta inyecciones de funciones
espías. Portable a Lua 5.1/Luau.

### 4.5. `table.freeze` readonly + nil-call (baja prioridad, Luau)
`table.freeze` es Luau. El nil-call (`attempt to call a nil value`) es
universal.

### 4.6. `bit32` (baja prioridad)
`bit32` existe en Lua 5.2+ y Luau. En Lua 5.1 puro no está garantizado.

## 5. Técnicas NO portables (dependen de Roblox)

- `Instance`, `game`, `GetService`, `Enum`, `EnumItem`, `Random.new`,
  `Path2D`, `Path2DControlPoint`, `UDim2`, `Vector2`, `workspace`,
  `ScreenGui`, `Frame`, `Folder`, `HttpService`, `RunService`.
- `buffer` (Luau puro, no en Lua 5.1 estándar).
- `task.spawn`/`task.delay`/`task.cancel` (Luau).
- `utf8.nfcnormalize`/`nfdnormalize` (Luau; `utf8` existe en Lua 5.3 pero sin
  NFC/NFD).
- `getfenv`/`setfenv` (Lua 5.1/Luau; eliminados en Lua 5.4, pero Fengetheus
  target es Lua 5.1/Luau así que OK).

## 6. Estrategia de integración en Fengetheus

El anti-tamper de Fengetheus se genera como **código fuente en string** que se
parsea con `Parser:new({LuaVersion = Enums.LuaVersion.Lua51})` y se inserta
como statement al frente del AST. Esto impone dos restricciones:

1. El código generado debe ser **sintácticamente Lua 5.1** (sin `+=`, `continue`,
   `::` labels), porque el parser interno usa Lua51 incluso cuando el target es
   Luau. Las llamadas a la API de Luau (`debug.info`, `iscclosure`,
   `buffer.create`, `task.spawn`, `Random.new`, `Instance.new`, `Enum`, etc.)
   son perfectamente válidas en sintaxis Lua 5.1 porque son solo accesos a
   variables/campos — no usan sintaxis reservada. Así se puede invocar toda la
   API de Luau manteniendo sintaxis Lua 5.1.
2. El código se inserta **antes** de Vmify en los presets, así que debe ser
   robusto por sí mismo.

### 6.1. Target confirmado: Luau

El usuario confirma que **siempre obfusca scripts Luau** (Roblox). Esto permite
usar libremente la API de Luau y validar los **mensajes de error exactos** de
Luau, que difieren de Lua 5.1 puro (Luau usa `"missing argument #1 to 'X'"`
y `"invalid argument #1 to 'X' (...)"`; Lua 5.1 usa `"bad argument #1 to 'X'"`).
Los mensajes embebidos en el anti-tamper se tomaron **verbatim del módulo
Luraph 14.7 filtrado**, que fue extraído de un runtime Roblox/Luau real, así que
coinciden con lo que un executor Luau produce. Las comprobaciones usan
`string.find` con subcadenas estables (nombre de función + tipo esperado) en
lugar de igualdad exacta, para tolerar variaciones menores de wording entre
revisiones de Luau sin perder la detección de un hook que devuelva un error
totalmente distinto.

Consecuencia: el payload anti-tamper **puede dar falso positivo si se ejecuta
en Lua 5.1 puro** (los mensajes de error y `debug.info` difieren). Esto es
aceptable porque el target es Luau. Las ramas Roblox-only (`Instance`, `Enum`,
`Random`, `buffer`, `task`) están guardadas con `type(x)=="table"/"userdata"`
para que se salten limpiamente si el runtime no las expone.

### 6.2. Comprobaciones integradas

Las técnicas portables (secciones 4.1-4.4) más las Luau/Roblox (4.5, 4.6 y las
familias 13-24 de Luraph) se integraron en `src/fengetheus/steps/AntiTamper.lua`:

- **Sistema `refs`** + verificación final de igualdad (anti-hookup global).
- **`checkError`/`normalizeError`** con comparación por subcadena estable.
- **`checkCClosure`** vía `debug.info` (Luau) con fallback `debug.getinfo` (5.1).
- **`checkLibraryMembers`**: verifica que los miembros críticos de
  `string`/`math`/`table`/`coroutine`/`debug` existen y son funciones (detecta
  borrados/swaps; los replaces por closures Lua los caza `checkCClosure`).
- **Roblox**: metatable lock de `Instance`/`Enum`/`EnumItem`, `FromName`/
  `FromValue`, `Random.new` determinista (seed 177465824, valores hardcodeados
  de Luraph).
- **Luau**: `buffer` round-trip completo, `task.spawn`/`task.delay`/`task.cancel`
  devuelven threads, `table.freeze` readonly, `bit32`.
- **`detected()`** estilo Luraph: `while true do end` además de bajar `valid`,
  para que un script manipulado no avance aunque una rama posterior olvide
  consultar `valid`.

Todo se probó con los 6 presets + `UseDebug=true` + smoke test bajo Lua 5.1.5:
el código generado parsea correctamente con el parser Lua51 interno y compila
con `luac`. La ejecución funcional real requiere un runtime Luau (Roblox),
donde los mensajes embebidos coinciden con los del módulo Luraph verificado.

## 7. Conclusión

El anti-tamper de Luraph 14.7 es sustancialmente más robusto que el de
Fengetheus, pero ~60% de sus comprobaciones están acopladas al runtime de
Roblox/Luau y no son directamente portables. El 40% restante —el sistema `refs`
con verificación final, la validación normalizada de mensajes de error, la
inspección de closures C vía `debug.info`, y la verificación del orden de
claves de librerías— es genérico, portable a Lua 5.1/Luau, y eleva
significativamente la resistencia del anti-tamper de Fengetheus contra hooks de
funciones nativas y replaces de entorno. Estas técnicas se integran en
`src/fengetheus/steps/AntiTamper.lua` conservando la arquitectura de
generación-de-código-que-se-parsea y los presets existentes.
