# Guia: abrir el proyecto en VS Code y conectarlo con GitHub

## 1. Instalar programas

| Programa | Link | Para que sirve |
|----------|------|----------------|
| VS Code | https://code.visualstudio.com | Editor de codigo |
| Git | https://git-scm.com/downloads | Control de versiones |
| Node.js LTS | https://nodejs.org | Herramientas para desarrollo web |

## 2. Clonar el proyecto

```bash
git clone https://github.com/luismanobanda2017-rgb/Estructura-Web.git
cd Estructura-Web
code .
```

## 3. Instalar extensiones en VS Code

En VS Code, abrir Extensions e instalar:

- Live Server
- GitLens
- Prettier - Code formatter

## 4. Revisar Supabase

El cliente compartido ya esta configurado en:

```txt
src/Persistence/supabaseClient.js
```

Proyecto Supabase:

```txt
https://uizabeaqthcsxuimclji.supabase.co
```

Importante:

- La `anon public key` si puede estar en frontend.
- La `service_role key` nunca debe publicarse.
- No subas archivos `.env` con claves privadas.

## 5. Abrir con Live Server

1. Clic derecho sobre `src/Web_Visual/index.html`.
2. Selecciona `Open with Live Server`.
3. Se abre el navegador normalmente en `http://127.0.0.1:5500`.
4. Prueba registro, login y dashboard.

## 6. Abrir desde otro celular o laptop en la misma red

No uses `127.0.0.1` desde otro dispositivo, porque apunta al propio dispositivo.

Usa la IP de tu laptop:

```txt
http://IP_DE_TU_LAPTOP:5500/src/Web_Visual/index.html
```

Ejemplo:

```txt
http://172.168.0.78:5500/src/Web_Visual/index.html
```

Si no carga, permite el acceso de VS Code o Live Server en el Firewall de Windows.

## 7. Subir cambios a GitHub

```bash
git status
git add .
git commit -m "docs: actualizar guia del proyecto"
git push
```

## 8. Publicar con GitHub Pages

Sitio publico:

```txt
https://luismanobanda2017-rgb.github.io/Estructura-Web/
```

Configuracion:

1. Entra al repositorio `Estructura-Web` en GitHub.
2. Ve a `Settings -> Pages`.
3. En `Source`, selecciona `Deploy from a branch`.
4. En `Branch`, selecciona `main`.
5. En carpeta, selecciona `/ (raiz)`.
6. Guarda los cambios.
7. Espera entre 1 y 10 minutos.

## 9. Pausar la pagina publica

1. Ve a `Settings -> Pages`.
2. Cambia `Source` a `None` si aparece.
3. Si GitHub muestra un boton para deshabilitar Pages, usalo.
4. Espera unos minutos.

## 10. Reactivar la pagina publica

1. Ve a `Settings -> Pages`.
2. Selecciona `Deploy from a branch`.
3. Selecciona la rama `main`.
4. Selecciona la carpeta `/ (raiz)`.
5. Guarda los cambios.

## 11. Probar registro y login

1. Abre `src/Web_Visual/index.html` con Live Server.
2. Clic en `Crea una cuenta`.
3. Ingresa nombre, correo `@uta.edu.ec` y contrasena.
4. Clic en `Registrar en BD`.
5. Revisa Supabase -> Table Editor -> tabla `usuarios`.
6. Cierra sesion y entra con el usuario creado.
