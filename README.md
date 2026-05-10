# 🎓 SmartCampus UTA — Proyecto Integrador

> **Estructura de Datos · Universidad Técnica de Ambato**  
> Sistema web de gestión universitaria implementando TDA en JavaScript + Supabase

---

## 🚀 Arquitectura del Proyecto (Por Capas)

```
src/
├── Presentation/        ← HTML + CSS (solo interfaz, sin lógica)
├── Persistence/         ← Conexión a Supabase
└── Domain/
    └── DataStructures/  ← TDA implementados en JavaScript puro

database/                ← Scripts SQL para crear tablas en Supabase
```

| Capa | Carpeta | Tecnología | Qué hace |
|------|---------|-----------|---------|
| Presentación | `src/Presentation/` | HTML5 + CSS3 | Interfaces de usuario |
| Persistencia | `src/Persistence/` | JS + Supabase SDK | Conexión a base de datos |
| Dominio | `src/Domain/DataStructures/` | JavaScript Vanilla | TDA: Cola, Árbol, Grafo, Lista |

---

## 🛠️ Tecnologías

- **Base de datos:** Supabase (PostgreSQL) — proyecto `uizabeaqthcsxuimclji`
- **Lenguaje:** JavaScript Vanilla (sin frameworks)
- **Estilo:** CSS3 con variables (paleta rojo UTA + beige cálido)
- **Arquitectura:** Por capas · Separación de responsabilidades

---

## 📌 Módulos del Sistema

| Módulo | TDA | Tabla Supabase |
|--------|-----|---------------|
| 🎫 Atención — Turnos | Cola FIFO | `turnos` |
| 📁 Documentos | Árbol N-ario | `documentos` |
| 🗺️ Rutas del Campus | Grafo + Dijkstra | `nodos_campus`, `rutas_campus` |
| 📋 Trámites | Lista Enlazada | `tramites` |

---

## ⚙️ Instalación

### 1. Clonar
```bash
git clone https://github.com/luismanobanda2017-rgb/Estructura-Web.git
cd Estructura-Web
```

### 2. Pegar tu clave de Supabase
En `src/Persistence/supabaseClient.js`, línea marcada con `PEGAR_ANON_KEY_AQUI`:
- Ve a [Supabase → Settings → API](https://supabase.com/dashboard/project/uizabeaqthcsxuimclji/settings/api)
- Copia la **anon public key** (empieza con `eyJ`)
- Pégala donde dice `PEGAR_ANON_KEY_AQUI`

### 3. Crear tablas en Supabase
En el [SQL Editor](https://supabase.com/dashboard/project/uizabeaqthcsxuimclji/editor), ejecuta en orden:
1. `database/01_tablas.sql`
2. `database/02_politicas_rls.sql`
3. `database/03_datos_prueba.sql` (opcional)

### 4. Abrir
Abre `src/Presentation/index.html` en el navegador.

---

## 📌 Estado actual

- [x] Estructura de carpetas por capas
- [x] Diseño de interfaz (index, registro, dashboard)
- [x] TDA implementados: Cola, Árbol, Grafo + Dijkstra, Lista Enlazada
- [x] Scripts SQL con 6 tablas y RLS
- [x] Cliente Supabase con login y registro
- [ ] Módulo de Turnos conectado a Supabase
- [ ] Módulo de Documentos conectado a Supabase
- [ ] Módulo de Rutas conectado a Supabase
- [ ] Módulo de Trámites conectado a Supabase

---

## 🔐 Seguridad (contraseñas)

- Las contraseñas se guardan como **hash**, no en texto plano
- La `anon key` de Supabase es **segura** en el frontend (Supabase usa RLS)
- La `service_role key` NUNCA va en el código
- El archivo `.env` está bloqueado por `.gitignore`

---

> Universidad Técnica de Ambato · Facultad de Ingeniería en Sistemas · Estructura de Datos 2025
