-- ============================================================
-- SmartCampus UTA — Script 03: Datos de Prueba
-- Ejecutar DESPUÉS de 01_tablas.sql y 02_politicas_rls.sql
-- ============================================================

-- ─────────────────────────────────────────
-- Usuarios de prueba
-- Nota: password es "123456" hasheado (en producción usar bcrypt real)
-- ─────────────────────────────────────────
INSERT INTO usuarios (nombre, email, password_hash, rol) VALUES
    ('Juan Pérez',       'juan.perez@uta.edu.ec',    'hash_123456', 'estudiante'),
    ('María García',     'maria.garcia@uta.edu.ec',  'hash_123456', 'estudiante'),
    ('Admin UTA',        'admin@uta.edu.ec',          'hash_admin',  'admin')
ON CONFLICT (email) DO NOTHING;

-- ─────────────────────────────────────────
-- Nodos del campus (para el módulo de Grafo)
-- ─────────────────────────────────────────
INSERT INTO nodos_campus (nombre, tipo, pos_x, pos_y) VALUES
    ('Entrada Principal',    'entrada',      100, 500),
    ('Biblioteca',           'edificio',     300, 300),
    ('Facultad de Sistemas', 'edificio',     500, 200),
    ('Cafetería Central',    'cafeteria',    400, 450),
    ('Parqueadero Norte',    'parqueadero',  200, 100),
    ('Bienestar Estudiantil','edificio',     600, 400),
    ('Secretaría General',   'edificio',     350, 500)
ON CONFLICT DO NOTHING;

-- ─────────────────────────────────────────
-- Rutas entre nodos del campus
-- ─────────────────────────────────────────
INSERT INTO rutas_campus (nodo_origen_id, nodo_destino_id, distancia, bidireccional)
SELECT o.id, d.id, dist, true FROM (VALUES
    ('Entrada Principal',    'Biblioteca',            250, 250),
    ('Entrada Principal',    'Secretaría General',    200, 200),
    ('Biblioteca',           'Facultad de Sistemas',  220, 220),
    ('Biblioteca',           'Cafetería Central',     170, 170),
    ('Facultad de Sistemas', 'Parqueadero Norte',     300, 300),
    ('Cafetería Central',    'Bienestar Estudiantil', 210, 210),
    ('Secretaría General',   'Cafetería Central',     150, 150)
) AS paths(origen, destino, dist, _dist2)
JOIN nodos_campus o ON o.nombre = paths.origen
JOIN nodos_campus d ON d.nombre = paths.destino
ON CONFLICT DO NOTHING;
