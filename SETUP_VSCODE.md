# 🖥️ Guía: Abrir proyecto en VS Code y conectar con GitHub

## PASO 1 — Instalar programas (solo una vez)

| Programa | Link | Para qué |
|----------|------|---------|
| VS Code | https://code.visualstudio.com | Editor de código |
| Git | https://git-scm.com/downloads | Control de versiones |
| Node.js (LTS) | https://nodejs.org | Para Live Server |

---

## PASO 2 — Clonar el proyecto desde GitHub

Abre una terminal y ejecuta:

```bash
git clone https://github.com/luismanobanda2017-rgb/Estructura-Web.git
cd Estructura-Web
code .
```

VS Code se abre con todo el proyecto.

---

## PASO 3 — Instalar extensiones en VS Code

En VS Code: clic en el ícono de bloques (lado izquierdo) → buscar e instalar:

- ✅ **Live Server** (por Ritwick Dey)
- ✅ **GitLens** (por GitKraken)
- ✅ **Prettier - Code formatter**

---

## PASO 4 — Pegar tu Anon Key de Supabase

1. Ve a: https://supabase.com/dashboard/project/uizabeaqthcsxuimclji/settings/api
2. Copia la **anon public key** (empieza con `eyJ...`)
3. En VS Code abre `src/Persistence/supabaseClient.js`
4. Reemplaza `PEGAR_ANON_KEY_AQUI` por tu clave.

---

## PASO 5 — Abrir con Live Server

1. Clic derecho sobre `src/Web_Visual/index.html`
2. Seleccionar **"Open with Live Server"**
3. Se abre el navegador en `http://127.0.0.1:5500`
4. Cada cambio que guardes (Ctrl+S) se actualiza automáticamente

### Abrir desde otro celular o laptop en la misma red

1. Asegúrate de que ambos dispositivos estén conectados al mismo Wi-Fi.
2. En la laptop, abre el proyecto con Live Server.
3. En el otro dispositivo entra a:

```txt
http://IP_DE_TU_LAPTOP:5500/src/Web_Visual/index.html
```

Ejemplo si tu laptop tiene la IP `172.168.0.78`:

```txt
http://172.168.0.78:5500/src/Web_Visual/index.html
```

Si no carga, permite el acceso de VS Code o Live Server en el Firewall de Windows.

---

## PASO 6 — Subir cambios a GitHub

Cada vez que hagas un cambio:

```bash
# Ver qué archivos cambiaste
git status

# Agregar todos los cambios
git add .

# Guardar con un mensaje descriptivo
git commit -m "feat: conectar login con Supabase"

# Subir a GitHub
git push
```

O desde VS Code: panel izquierdo → ícono de rama (Source Control) → escribir mensaje → clic en ✓

---

## PASO 7 — Publicar en internet con GitHub Pages

El sitio público queda en:

```txt
https://luismanobanda2017-rgb.github.io/Estructura-Web/
```

Para activarlo por primera vez:

1. Sube los cambios a GitHub con `git push`.
2. En GitHub entra al repositorio `Estructura-Web`.
3. Ve a **Settings** → **Pages**.
4. En **Source**, selecciona **GitHub Actions**.
5. Espera a que termine el workflow **Deploy SmartCampus UTA to GitHub Pages**.

Después de eso, cualquier persona con internet podrá entrar al link público.

---

## FLUJO DE TRABAJO NORMAL

```
1. Abres VS Code
2. Haces cambios en los archivos
3. Live Server muestra los cambios en el navegador automáticamente
4. Pruebas que funcione (registro, login, etc.)
5. git add . → git commit -m "mensaje" → git push
6. Los cambios quedan en GitHub y cualquier IA puede verlos
```

---

## PROBAR QUE EL REGISTRO FUNCIONA

1. Abre `index.html` con Live Server
2. Clic en "Crea una cuenta"
3. Ingresa: nombre, correo (@uta.edu.ec), contraseña
4. Clic en "Registrar en BD"
5. Ve a Supabase → Table Editor → tabla `usuarios`
6. Deberías ver el nuevo registro ahí ✅
