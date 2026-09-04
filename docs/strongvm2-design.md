# StrongVM2: diseño y límites de seguridad

StrongVM2 es el preset de Fengetheus que combina las transformaciones que se
pueden aplicar de forma segura sobre el AST/IR de Luau con una máquina virtual
de ejecución propia. El objetivo es aumentar el coste de análisis estático sin
cambiar el resultado observable del programa original.

## Técnicas integradas

| Técnica | Implementación en Fengetheus | Garantía o límite |
| --- | --- | --- |
| Virtualización | `Vmify` compila el AST a bloques e instrucciones de una VM propia | Conserva la semántica de Luau porque parte del compilador interno, no de texto reescrito |
| Registros virtuales | El layout de registros se baraja con una semilla por compilación | La asignación se mantiene consistente dentro de cada chunk |
| Estados afines | Los estados del dispatcher se codifican como `a * state + b`, con multiplicador impar | El decodificador usa la misma clave; los estados no aparecen como IDs lineales |
| Máscara del dispatcher | Los límites y posiciones llevan una máscara aleatoria acotada | Evita patrones constantes simples sin introducir aritmética no acotada |
| Trampolines de dispatch | Cada destino recibe un bloque de rebote que vuelve a escribir `pos` antes de continuar | Se generan una vez por destino y se reutilizan; no hay bucles extra ni llamadas de usuario |
| Mutación de condiciones | `ControlFlowMutation` envuelve condiciones en capas equivalentes con predicados privados | Solo usa comparaciones numéricas locales y no evalúa dos veces la expresión original |
| Predicados opacos existentes | Se conserva la etapa de predicados del pipeline | Se ejecuta antes de la mutación de condiciones para que ambas capas sean independientes |
| Pool tipado de constantes | `ConstantArray` separa números, strings, booleanos y `nil` | Evita colisiones entre tipos y conserva `-0.0`, `NaN` y valores fraccionarios |
| Lookup secundario de strings | StrongVM2 añade una segunda capa acotada para resolver strings | Solo se aplica a strings y preserva la ruta base como fallback |
| Compresión y empaquetado | Se conservan las etapas de compresión/emisión del pipeline | La compatibilidad depende de la versión de Luau indicada por el CLI |

La semilla controla todas las decisiones aleatorias relevantes. Esto permite
reproducir una compilación para depurarla, y el harness ejecuta varias semillas
para detectar errores que una sola disposición no revela.

## Técnicas investigadas pero no copiadas literalmente

Se revisaron las técnicas visibles en Hercules y en el código fuente local de
MoonSec. Algunas implementaciones son útiles como referencia conceptual, pero
no son seguras para incorporarlas sin un backend equivalente:

- Un encoder de bytecode basado en `string.dump`/`load` de Lua no es un backend
  de Luau y puede romper compatibilidad, cierres o instrucciones específicas de
  la versión del runtime.
- El inlining textual, el generador dinámico basado en sustituciones de texto y
  los bucles basura insertados fuera del AST pueden cambiar orden de evaluación,
  varargs, múltiples retornos, metatables o el alcance de variables.
- La serialización de chunks y los superoperadores de MoonSec requieren su
  propio formato de bytecode, decoder y conjunto de opcodes. Se tomó la idea de
  mezclar la representación y fusionar trabajo en la VM, pero se implementó
  sobre el IR validado de Fengetheus para no inventar una segunda semántica.
- Anti-tamper agresivo, introspección de natives o comprobaciones dependientes de
  APIs no disponibles no forman parte del preset por defecto: pueden producir
  falsos positivos y hacer que un script válido deje de devolver lo mismo que el
  original.

En otras palabras, StrongVM2 no pretende ser una copia de un producto cerrado:
usa equivalentes verificables en el nivel correcto del compilador y deja fuera
las transformaciones que solo serían “meter por meter” o que no pueden
demostrarse compatibles con Luau.

## Contrato de verificación

El harness cubre los presets públicos y casos de control de flujo, cierres
profundos, varargs, múltiples retornos, metamétodos, tipos de constantes y
valores numéricos límite. StrongVM2 se prueba con tres semillas y también se
ejecuta con Lumora como runtime de Luau.

Antes de publicar una revisión del preset deben pasar:

1. La matriz completa de presets, casos y semillas.
2. La compilación sintáctica de todos los módulos Lua modificados.
3. La ejecución del artefacto real de Aura en Lumora.
4. La suite nativa de Lumora cuando se modifica su repositorio.

Una diferencia entre el original y el resultado obfuscado es un fallo de
compatibilidad que debe corregirse, no ocultarse ajustando el caso de prueba.
