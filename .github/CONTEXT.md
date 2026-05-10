# 🤖 CONTEXT.md — Guía para IAs (leer antes de cualquier tarea)

## Proyecto
**SmartCampus UTA** — Aplicación web de gestión universitaria (Estructura de Datos, UTA).  
Frontend puro (HTML/CSS/JS Vanilla) + Supabase como base de datos.

## Arquitectura
```
src/Presentation/        → HTML + CSS (solo UI, sin lógica)
src/Persistence/         → supabaseClient.js (conexión BD, login, registro)
src/Domain/DataStructures/ → Cola.js | Arbol.js | Grafo.js | ListaEnlazada.js
database/                → SQL para Supabase
```

## Supabase
- **URL:** `https://uizabeaqthcsxuimclji.supabase.co`
- **SDK:** Cargar via CDN: `https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm`
- **Anon key:** La pega el usuario en `src/Persistence/supabaseClient.js`

## Tablas de la BD

| Tabla | Campos clave |
|-------|-------------|
| `usuarios` | id (uuid), nombre, email, password_hash, rol |
| `turnos` | id, usuario_id, numero_turno, servicio, estado, created_at |
| `documentos` | id, nombre, tipo, parent_id, propietario_id, url_archivo |
| `tramites` | id, usuario_id, tipo, descripcion, estado, siguiente_id |
| `nodos_campus` | id, nombre, tipo, pos_x, pos_y |
| `rutas_campus` | id, nodo_origen_id, nodo_destino_id, distancia, bidireccional |

## CSS Variables (en src/Presentation/css/style.css)
```css
--rojo-uta: #D32F2F
--rojo-hover: #B71C1C
--negro-texto: #4A4540
--gris-cuerpo: #7D7771
--fondo-pagina: #F2E8D5
--fondo-contenedor: #FAF7F0
--borde: #E9E1D2
```

## Clases CSS existentes
`.btn`, `.btn-small`, `.card`, `.grid-modules`, `.dashboard-container`, `.subtitle`, `.footer-text`

## Convenciones
- JavaScript Vanilla — sin React, sin Vue, sin jQuery
- Todo texto al usuario en **español**
- Usar `async/await` para llamadas a Supabase
- Importar TDA desde `../Domain/DataStructures/`
- Importar supabase desde `../Persistence/supabaseClient.js`

## TDA implementados
- `Cola.js` → encolar(), desencolar(), frente()
- `Arbol.js` → construirDesdeArray(registros), buscar(id), recorrerDFS()
- `Grafo.js` → construirDesdeSupabase(nodos, rutas), dijkstra(origenId, destinoId)
- `ListaEnlazada.js` → insertar(dato), eliminar(id), toArray()

## Cómo pedir ayuda
```
"Lee CONTEXT.md y crea el módulo de turnos en src/Presentation/turnos.html con supabaseClient.js"
"Lee CONTEXT.md y conecta Grafo.js con la tabla nodos_campus de Supabase"
"Lee CONTEXT.md y agrega logout al dashboard.html usando cerrarSesion() de supabaseClient.js"
```
