# Informe de verificación CLI

## Alcance

La verificación cubre la ruta soportada del repositorio: el lanzador `bin/fengetheus`, la entrada Lua `src/cli.lua`, la selección de presets y la escritura de un archivo de salida local. No se utilizan paquetes JavaScript ni servicios HTTP.

## Comprobaciones realizadas

| Comprobación | Resultado |
|---|---|
| `bin/fengetheus --help` | PASS |
| `bin/fengetheus --version` | PASS; muestra `dev` cuando no se define `PROMETHEUS_LUA_VERSION`. |
| Ofuscación de un script Lua con `Minify` | PASS |
| Generación de un archivo de salida mediante `--out` | PASS |
| `test/cli-smoke.sh` | PASS |

La prueba de humo crea un script Lua temporal, ejecuta la CLI mediante el lanzador del repositorio, comprueba que el archivo de salida no esté vacío y verifica que conserve el literal esperado. Todos los archivos temporales se eliminan al finalizar.

## Ejecución

```sh
test/cli-smoke.sh
```

Si el intérprete Lua tiene otro nombre o está instalado en una ruta específica, puede definirse `LUA_BIN`:

```sh
LUA_BIN=lua5.3 test/cli-smoke.sh
```

## Resultado

La ruta CLI-only queda validada para el caso de humo local. Los casos Lua de referencia se conservan en `test/cases/` para verificaciones adicionales con los presets `Weak`, `Medium` y `Strong`.
