# Proxy raíz en Vercel hacia backend xhttp

Este repositorio implementa un proxy HTTP/S en la raíz (`/`) usando Vercel, que reescribe todo el tráfico entrante hacia el backend:

**Destino:** https://ruta.culturavpn.site/

## ¿Cómo funciona?

- Toda solicitud recibida (incluida la raíz `/`) se redirige automáticamente hacia el backend externo, que opera bajo Cloudflare y protocolo xhttp.
- La regla global se configura en `vercel.json`.

## Archivos importantes

- `vercel.json`: Define la regla de rewrite proxy.
- `README.md`: Este archivo, necesario para que Vercel reconozca la estructura del repo y despliegue correctamente.

## Despliegue

1. Sube este repo a GitHub.
2. Importa en Vercel y confirma el deployment.
3. Accede desde tu dominio Vercel para ver el tráfico proxyficado.

---
