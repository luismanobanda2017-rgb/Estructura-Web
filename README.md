# SmartCampus UTA - Proyecto Integrador

Sistema web de gestion universitaria para la materia Estructura de Datos.
Usa JavaScript Vanilla, HTML, CSS, Supabase y una arquitectura por capas.

## Sitio publico

GitHub Pages:

```txt
https://luismanobanda2017-rgb.github.io/Estructura-Web/
```

El archivo `index.html` de la raiz redirige a:

```txt
src/Web_Visual/index.html
```

## Estructura

```txt
src/
  Web_Visual/              HTML + CSS
  Persistence/             Conexion a Supabase
  Domain/
    DataStructures/        TDA en JavaScript

database/                  Scripts SQL de Supabase
```

| Capa | Carpeta | Tecnologia | Funcion |
|------|---------|------------|---------|
| Presentacion | `src/Web_Visual/` | HTML5 + CSS3 | Interfaz de usuario |
| Persistencia | `src/Persistence/` | JS + Supabase SDK | Conexion a base de datos |
| Dominio | `src/Domain/DataStructures/` | JavaScript | Cola, arbol, grafo y lista |

## Modulos

| Modulo | TDA | Tabla Supabase |
|--------|-----|----------------|
| Atencion - Turnos | Cola FIFO | `turnos` |
| Documentos | Arbol | `documentos` |
| Rutas del campus | Grafo + Dijkstra | `nodos_campus`, `rutas_campus` |
| Tramites | Lista enlazada | `tramites` |

## Supabase

Proyecto:

```txt
https://uizabeaqthcsxuimclji.supabase.co
```

El cliente compartido esta en:

```txt
src/Persistence/supabaseClient.js
```

La anon public key esta en ese archivo. Es correcto para frontend siempre que Supabase tenga RLS configurado. No se debe subir nunca la `service_role key`.

## Crear base de datos

En Supabase SQL Editor ejecuta en orden:

```txt
database/01_tablas.sql
database/02_politicas_rls.sql
database/03_datos_prueba.sql
```

El tercer script es opcional y crea usuarios/datos de prueba.

Usuario de prueba:

```txt
admin@uta.edu.ec
123456
```

## Ejecutar localmente

Abre con Live Server:

```txt
src/Web_Visual/index.html
```

Para probar desde otro celular o laptop en la misma red, no uses `127.0.0.1`; usa la IP de tu laptop:

```txt
http://IP_DE_TU_LAPTOP:5500/src/Web_Visual/index.html
```

Para acceso desde internet, usa GitHub Pages.

## GitHub Pages

El proyecto esta preparado para publicarse desde una rama y la carpeta raiz.

En GitHub:

1. Ve a `Settings`.
2. Entra a `Pages`.
3. En `Source`, elige `Deploy from a branch`.
4. En `Branch`, usa la rama configurada para Pages. En tu GitHub aparece `principal`.
5. En `Folder`, elige `/ (root)`.
6. Guarda los cambios.

La pestana `Actions` puede mostrar ejecuciones de Pages. Eso es normal: son registros de despliegue, no copias diferentes del proyecto.

## Estado

- Login conectado a Supabase.
- Registro conectado a Supabase.
- Cliente Supabase centralizado.
- Dashboard protegido por sesion en `localStorage`.
- Scripts SQL listos para crear tablas y politicas.
- GitHub Pages preparado desde la raiz del repo.

Pendiente para una version mas completa:

- Conectar el modulo de turnos con Supabase.
- Conectar documentos con Supabase.
- Conectar rutas con Supabase.
- Conectar tramites con Supabase.
