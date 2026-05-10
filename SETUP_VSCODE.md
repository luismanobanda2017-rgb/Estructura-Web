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
3. En VS Code abre estos 2 archivos y reemplaza `PEGAR_ANON_KEY_AQUI`:
   - `src/Presentation/index.html`
   - `src/Presentation/registro.html`

---

## PASO 5 — Abrir con Live Server

1. Clic derecho sobre `src/Presentation/index.html`
2. Seleccionar **"Open with Live Server"**
3. Se abre el navegador en `http://127.0.0.1:5500`
4. Cada cambio que guardes (Ctrl+S) se actualiza automáticamente

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
