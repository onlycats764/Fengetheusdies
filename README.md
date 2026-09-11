# Fengetheus

Fengetheus es una herramienta local de línea de comandos para transformar archivos Lua mediante el compilador y la canalización de Prometheus. Lee un archivo, aplica un preset o una configuración Lua y escribe el resultado en otro archivo.

## Requisitos

Necesita un intérprete Lua accesible como `lua` o indicado mediante `LUA_BIN`. El lanzador POSIX no requiere Node.js, un gestor de paquetes ni un servicio remoto.

```bash
git clone https://github.com/Xyraniz/Fengetheus.git
cd Fengetheus
chmod +x bin/fengetheus
LUA_BIN=lua5.3 bin/fengetheus --help
```

## Ejemplos

```bash
bin/fengetheus --preset Medium --out output.lua input.lua
lua src/cli.lua --preset Strong input.lua
```

Si no se especifica `--out`, el resultado se guarda junto al archivo de entrada con el sufijo `.obfuscated.lua`. Los presets disponibles incluyen `Minify`, `Weak`, `WeakStealth`, `Medium`, `Strong`, `StrongVM2` y `StrongScalable`. También se puede pasar una configuración propia con `--config` y elegir el destino `--Lua51` o Luau según el archivo.

La transformación puede cambiar el tamaño, el rendimiento y la compatibilidad del programa. Prueba siempre el resultado en el mismo intérprete y entorno que lo ejecutará. La ofuscación no sustituye la gestión de secretos, el control de acceso ni una frontera de ejecución segura.

## Organización y atribución

El código principal está en `src/`, el lanzador en `bin/`, las pruebas en `test/` y la interfaz web en `web/`. Fengetheus deriva de [Prometheus](https://github.com/prometheus-lua/Prometheus), creado por Elias Oelschner; revisa `LICENSE` y `web/THIRD_PARTY_NOTICES.md` para las condiciones aplicables.
