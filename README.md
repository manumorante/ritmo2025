[![wakatime](https://wakatime.com/badge/user/c8d2802f-0742-4964-bd79-1cb374b6de43/project/ed91c555-da84-40d6-9322-64d006783154.svg)](https://wakatime.com/badge/user/c8d2802f-0742-4964-bd79-1cb374b6de43/project/ed91c555-da84-40d6-9322-64d006783154.svg)

## No Indexación

Este sitio está configurado para no ser indexado por motores de búsqueda (versión del año pasado). La configuración incluye:

- `robots.txt`: Bloquea todos los crawlers
- Headers HTTP (`vercel.json`): `X-Robots-Tag: noindex, nofollow, noarchive`
- Meta tags HTML: `robots` en todas las páginas con `noindex, nofollow, noarchive, nosnippet`
