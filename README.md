# SmartCampus UTA - Proyecto Integrador

Sistema web de gestion universitaria para la Universidad Tecnica de Ambato, implementado con JavaScript Vanilla, Supabase y estructuras de datos.

## Sitio publico

GitHub Pages:

```txt
https://luismanobanda2017-rgb.github.io/Estructura-Web/
```

El archivo `index.html` de la raiz redirige automaticamente a:

```txt
src/Web_Visual/index.html
```

## Arquitectura del proyecto

```txt
src/
├── Web_Visual/          HTML + CSS de la interfaz web
├── Persistence/         Cliente compartido de Supabase
└── Domain/
    └── DataStructures/  TDA en JavaScript puro

database/                Scripts SQL para Supabase
```

| Capa | Carpeta | Tecnologia | Que hace |
|------|---------|------------|----------|
| Presentacion | `src/Web_Visual/` | HTML5 + CSS3 | Login, registro y dashboard |
| Persistencia | `src/Persistence/` | JS + Supabase SDK | Conexion a base de datos |
| Dominio | `src/Domain/DataStructures/` | JavaScript Vanilla | Cola, arbol, grafo y lista |

## Modulos del sistema

| Modulo | TDA | Tabla Supabase |
|--------|-----|----------------|
| Atencion - Turnos | Cola FIFO | `turnos` |
| Documentos | Arbol N-ario | `documentos` |
| Rutas del Campus | Grafo + Dijkstra | `nodos_campus`, `rutas_campus` |
| Tramites | Lista Enlazada | `tramites` |

## Supabase

Proyecto:

```txt
https://uizabeaqthcsxuimclji.supabase.co
```

El cliente compartido esta en:

```txt
src/Persistence/supabaseClient.js
```

La `anon public key` puede usarse en frontend. La `service_role key` nunca debe subirse al codigo.

## Crear la base de datos

En Supabase SQL Editor, ejecutar en orden:

```txt
database/01_tablas.sql
database/02_politicas_rls.sql
database/03_datos_prueba.sql
```

El script `03_datos_prueba.sql` crea usuarios de prueba. La contrasena para esos usuarios es:

```txt
123456
```

## Abrir localmente

Usa Live Server sobre:

```txt
src/Web_Visual/index.html
```

Para probar desde otro celular o laptop en la misma red, no uses `127.0.0.1`. Usa la IP de la laptop:

```txt
http://IP_DE_TU_LAPTOP:5500/src/Web_Visual/index.html
```

## GitHub Pages

Configuracion recomendada:

```txt
Settings -> Pages
Source: Deploy from a branch
Branch: main
Folder: / (raiz)
```

Para pausar la pagina publica, cambia `Source` a `None` o deshabilita GitHub Pages desde Settings -> Pages.

## Estado actual

- [x] Login conectado a Supabase
- [x] Registro conectado a Supabase
- [x] Cliente Supabase centralizado
- [x] Redireccion de GitHub Pages desde `index.html`
- [x] Dashboard protegido con `localStorage`
- [x] Scripts SQL para tablas, RLS y datos de prueba
- [x] TDA implementados en `src/Domain/DataStructures/`
- [ ] Modulo visual de Turnos conectado a Supabase
- [ ] Modulo visual de Documentos conectado a Supabase
- [ ] Modulo visual de Rutas conectado a Supabase
- [ ] Modulo visual de Tramites conectado a Supabase

## Flujo Git normal

```bash
git status
git add .
git commit -m "mensaje descriptivo"
git push
```
