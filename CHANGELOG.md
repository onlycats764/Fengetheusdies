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
