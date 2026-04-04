# 03-Vue Router SPA

Esto es un proyecto de un curso de Vue de fernando herrera con algunas modificaciones y mejoras aplicadas

## Mejoras aplicadas

- Se ha agregado dockerización al proyecto, para hacer que no sean necesarias instalaciones en local
- Se ha agregado un .npmrc para incrementar la seguridad del repositorio  
- Se ha instalado pnpm en el contenedor para incrementar la seguridad del repositorio

|Entorno|Comando|url|
|-|-|-|
|dev|docker compose --profile dev up|<http://localhost:8191/>|
|prod|docker compose --profile prod up|<http://localhost:8091/>|
