# Changelog

## 1.2.0 — 2026-08-10

### Corrección de compatibilidad con Fengari/Lua 5.3

**Bug.** En la versión reproducida, el ejemplo mínimo del usuario fallaba en la interfaz con `attempt to call a nil value (global 'unpack')`. El fallo afectaba a `Weak`, `Medium` y `Strong`; `Minify` no recorría inicialmente todas las rutas que usaban esa función.

**Causa raíz.** El código heredado de Prometheus contiene llamadas a la función global `unpack`, propia del modelo de Lua 5.1. Fengari ejecuta Lua 5.3, donde la función estándar vive en `table.unpack` y no se publica como global. La excepción ocurría dentro de la VM privada que ejecuta el compilador, antes de que el ofuscador pudiera devolver código.

**Solución.** `src/prometheus.lua` instala, antes de cargar cualquier submódulo del compilador, un alias privado `_G.unpack = table.unpack` únicamente si el global no existe. `src/prometheus/visitast.lua` y `src/prometheus/steps/ProxifyLocals.lua` además declaran una referencia local compatible como defensa en profundidad. No se eliminó ni debilitó ninguna transformación, paso de ofuscación o mecanismo anti-tamper, y la semántica del código Lua generado para el usuario no se modifica.

### Corrección de bloqueo de la página con scripts grandes

**Bug.** El pipeline se ejecutaba sincrónicamente en el hilo principal y escribía el resultado completo en un `textarea`. En resultados de decenas o cientos de kilobytes, el navegador podía parecer bloqueado o dejar de responder.

**Causa raíz.** Fengari y Prometheus realizan trabajo intensivo de CPU; además, asignar grandes cadenas a un control editable obliga al navegador a realizar trabajo de renderizado y layout que no es necesario para descargar el archivo.

**Solución.** Se añadió `web/src/worker.js`, que ejecuta Fengari, Prometheus, la auto-verificación y los reintentos en un Web Worker dedicado. `web/src/app.js` recibe los logs por mensajes, conserva el resultado completo en memoria y solamente muestra una previsualización inline hasta 64 KiB. Por encima de ese umbral, el `textarea` queda vacío, se indica `download-only`, se mantiene habilitado `Download` y se deshabilita `Copy` para no volver a renderizar el contenido como texto plano.

### Pruebas y mantenimiento

Se añadió `test/regression.mjs` y se actualizó `npm test` para ejecutarlo. El conjunto cubre el ejemplo reportado, funciones con múltiples retornos, cierres, tablas y control de flujo, los cuatro presets y una entrada de 51 KiB cuyo resultado `Weak` supera 100 KiB. También se documentaron las dos correcciones en `PATCHES.md` y se actualizaron las instrucciones del `README.md`.
## 1.3.0 — 2026-08-10
### Corrección real del bug no determinista de Vmify/ConstantArray (upstream #155 / #18)
**Bug.** En los presets Medium y Strong, el código ofuscado fallaba en tiempo de ejecución de forma aleatoria con `attempt to index a nil value`, sobre un nombre de variable distinto en cada intento. El fallo no dependía del script de entrada ni del entorno, y se conocía upstream como bug abierto (issues #155 y #18 de prometheus-lua/Prometheus).
**Causa raíz.** El paso Vmify reescribe el script como una VM de bytecode propia, generando muchas closures internas, cada una con un objeto Scope cuyo `parentScope` debe reflejar fielmente el anidamiento léxico. El paso ConstantArray extrae constantes llamando a `addReferenceToHigherScope` y subiendo recursivamente por `parentScope` para que el compilador final sepa qué upvalues capturar en cada función emitida. La closure `__len` del metametatable del **else-branch** del proxy de upvalues (`createUpvaluesProxyFunc` en `src/prometheus/compiler/upvalue.lua`) se parenteaba al scope del if-branch (un hermano, no un ancestro), rompiendo la cadena para las constantes extraídas desde ese bloque: el compilador final omitía el array de constantes o su wrapper de la lista de upvalues de la función, y en runtime esa variable quedaba `nil`. Como ConstantArray elige qué constante extraer con `math.random` (Shuffle/Threshold), el fallo era probabilístico y mostraba un nombre de variable distinto cada vez.
**Solución.** `src/prometheus/compiler/upvalue.lua` crea el scope de esa closure como `Scope:new(elseScope)` en lugar de `Scope:new(ifScope)`. Es un cambio de una línea en la contabilidad de scopes del compilador: no se eliminó ni debilitó ninguna transformación, y AntiTamper, EncryptStrings y todos los pasos permanecen intactos. Un verificador automático de invariantes de scopes (`test/invariant-check.lua`) sobre cientos de compilaciones con semillas variadas no encontró ninguna otra ruptura de `parentScope`, y un registro instrumentado de `addReferenceToHigherScope` (`test/trace-anomalies.lua`) confirmó cero registros de hoisting desde scopes no ancestros en Medium y Strong.
### Self-test mejorado contra corrupción silenciosa
La autoverificación de `web/src/engine.js` ya no solo comprueba que el código ofuscado no truene: ahora captura y compara también el valor de retorno del chunk (serializado mediante una pequeña función Lua), y normaliza los números de línea dentro de los mensajes de error antes de diffear, evitando falsos positivos por líneas desplazadas tras el reenvoltorio. Cualquier desviación de valores dispara el mismo reintento con semilla forzada que antes solo disparaban los crashes.
### Pruebas
Se añadió `test/full-suite.mjs` con ocho scripts de prueba distintos (aritmética y control de flujo, fibonacci recursivo con memoización, sieve, closures y generadores, strings intensivo, tablas con metametablas y `__len`, simulación de tween/easing, y varargs con pcall). El conjunto completo — 8 scripts × Medium/Strong × 30 semillas forzadas distintas (480 compilaciones) — pasó sin ningún crash ni corrupción silenciosa. La verificación de poder de ofuscación confirmó que el output Strong mantiene las strings cifradas (0 strings del input en texto plano) y los guards de AntiTamper/VM.
