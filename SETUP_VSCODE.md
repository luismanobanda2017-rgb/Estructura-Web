# Guia: abrir el proyecto en VS Code y subir cambios

## 1. Instalar programas

| Programa | Link | Para que sirve |
|----------|------|----------------|
| VS Code | https://code.visualstudio.com | Editor de codigo |
| Git | https://git-scm.com/downloads | Control de versiones |
| Node.js LTS | https://nodejs.org | Soporte para herramientas locales |

Extension recomendada en VS Code:

```txt
Live Server
```

## 2. Clonar el proyecto

```bash
git clone https://github.com/luismanobanda2017-rgb/Estructura-Web.git
cd Estructura-Web
code .
```

## 3. Abrir el sitio local

Con Live Server:

1. Clic derecho en `src/Web_Visual/index.html`.
2. Selecciona `Open with Live Server`.
3. El navegador abre una direccion parecida a:

```txt
http://127.0.0.1:5500/src/Web_Visual/index.html
```

## 4. Probar desde otro dispositivo en la misma red

`127.0.0.1` solo sirve en la laptop donde corre Live Server.

Para un celular u otra laptop usa la IP real de tu laptop:

```txt
http://IP_DE_TU_LAPTOP:5500/src/Web_Visual/index.html
```

Ejemplo:

```txt
http://172.168.0.78:5500/src/Web_Visual/index.html
```

Si no abre, permite VS Code o Live Server en el Firewall de Windows.

## 5. Supabase

El proyecto usa el cliente compartido:

```txt
src/Persistence/supabaseClient.js
```

La anon public key puede estar en el frontend. Nunca pegues la `service_role key` en el codigo.

Para crear la base de datos, ejecuta en Supabase SQL Editor:

```txt
database/01_tablas.sql
database/02_politicas_rls.sql
database/03_datos_prueba.sql
```

## 6. Subir cambios a GitHub

```bash
git status
git add .
git commit -m "docs: actualizar guia del proyecto"
git push
```

Desde VS Code tambien puedes usar el panel `Source Control`.

## 7. GitHub Pages

Sitio publico:

```txt
https://luismanobanda2017-rgb.github.io/Estructura-Web/
```

Para activar:

1. Entra al repositorio en GitHub.
2. Ve a `Settings` > `Pages`.
3. En `Source`, elige `Deploy from a branch`.
4. En `Branch`, elige la rama configurada para Pages. En tu GitHub aparece `principal`.
5. En `Folder`, elige `/ (root)`.
6. Guarda.

Para pausar:

1. Ve a `Settings` > `Pages`.
2. Cambia `Source` a `None`, si aparece, o deshabilita Pages.
3. Espera unos minutos.

## 8. Sobre la pestana Actions / Comportamiento

GitHub muestra ahi las ejecuciones automaticas.

`pages-build-deployment` es el despliegue normal de GitHub Pages.
No significa que tengas varios proyectos ni archivos diferentes; solo muestra el historial de publicaciones.
