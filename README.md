# Fengetheus

Fengetheus es una herramienta de línea de comandos para ofuscar código Lua mediante el compilador real de [Prometheus](https://github.com/prometheus-lua/Prometheus). El repositorio es ahora **CLI-only**: no incluye interfaz web ni servicios remotos; la ejecución se realiza directamente con el intérprete Lua local.

La ejecución ocurre localmente en el equipo. El código de entrada se lee desde un archivo y el resultado se escribe en otro archivo; no se envía a ningún servicio remoto durante la ofuscación.

## Requisitos

Se necesita un intérprete Lua compatible con la CLI de Prometheus. El comando de uso habitual es `lua`; también puede utilizarse una instalación compatible de Lua 5.1 o LuaU según el objetivo del script.

## Uso rápido

Desde un clon del repositorio:

```sh
chmod +x bin/fengetheus
bin/fengetheus --preset Medium --out output.lua input.lua
```

También puede ejecutarse directamente con el intérprete Lua:

```sh
lua src/cli.lua --preset Strong input.lua
```

Si no se especifica `--out`, la CLI genera un archivo junto al original con el sufijo `.obfuscated.lua`. Si no se especifica un preset ni un archivo de configuración, se utiliza `Minify`.

## Opciones de la CLI

| Opción | Descripción |
|---|---|
| `--preset`, `--p <nombre>` | Selecciona `Minify`, `Weak`, `Medium`, `Strong` o `StrongScalable`. `Strong` siempre aplica todas sus capas; `StrongScalable` es un perfil alternativo explícito para entradas grandes. |
| `--config`, `--c <archivo>` | Carga una configuración Lua personalizada. |
| `--out`, `--o <archivo>` | Define la ruta del archivo de salida. |
| `--Lua51` | Fuerza el objetivo Lua 5.1. |
| `--LuaU` | Fuerza el objetivo LuaU. |
| `--pretty` | Conserva la salida con formato legible. |
| `--nocolors` | Desactiva los colores de los mensajes de la CLI. |
| `--saveerrors` | Guarda los errores de análisis junto al archivo de entrada. |
| `--version`, `-v` | Muestra la versión configurada de la CLI. |
| `--help`, `-h` | Muestra la ayuda completa. |
| `update` | Ejecuta el actualizador oficial de Prometheus. |

Los presets disponibles ofrecen distintos compromisos entre legibilidad, tamaño, tiempo de ejecución y resistencia a la ingeniería inversa. `Minify` solo minimiza; `Weak`, `Medium` y `Strong` agregan capas progresivas de transformación y ofuscación. `StrongScalable` conserva cifrado de cadenas, anti-tamper, array de constantes barajado/rotado, mutación de expresiones numéricas y envoltura en función, pero omite las capas que pueden generar una salida que supere los límites de locales o anidamiento de Lua en archivos muy grandes.

## Estructura del proyecto

```text
src/
  cli.lua                  Entrada principal de la CLI.
  fengetheus.lua           Inicialización y exportación del motor.
  fengetheus/              Compilador, presets y transformaciones Lua.
bin/
  fengetheus               Lanzador POSIX para ejecutar la CLI desde el clon.
LICENSE                    Licencias y atribuciones del proyecto.
PATCHES.md                 Compatibilidad y cambios aplicados al motor.
CHANGELOG.md               Historial de cambios.
test/
  cli-smoke.sh              Prueba de humo del flujo de línea de comandos.
  cases/                    Casos Lua de referencia.
```

El motor conserva la atribución y las condiciones de licencia de Prometheus. Consulte `LICENSE` y `PATCHES.md` antes de redistribuir el proyecto o los archivos generados.

## Desarrollo y verificación

La CLI no requiere una fase de bundling ni una instalación de paquetes JavaScript. Para probarla localmente, use un archivo Lua de ejemplo:

```sh
cat > /tmp/fengetheus-example.lua <<'LUA'
local function greet(name)
  return "Hello, " .. name .. "!"
end

print(greet("World"))
LUA

bin/fengetheus --preset Medium --out /tmp/fengetheus-output.lua /tmp/fengetheus-example.lua
```

La salida debe ser un archivo Lua válido que pueda ejecutarse con el intérprete correspondiente al objetivo seleccionado. Los mensajes de progreso y los errores se imprimen en la terminal.

La prueba de humo puede ejecutarse con:

```sh
test/cli-smoke.sh
```

Si el intérprete no se llama `lua`, define `LUA_BIN` antes de ejecutarla, por ejemplo `LUA_BIN=lua5.3 test/cli-smoke.sh`.

## Créditos

Fengetheus deriva de [Prometheus](https://github.com/prometheus-lua/Prometheus), creado por Elias Oelschner. El motor y las transformaciones se mantienen bajo las condiciones indicadas en `LICENSE`; las modificaciones específicas de Fengetheus están descritas en `PATCHES.md`.
