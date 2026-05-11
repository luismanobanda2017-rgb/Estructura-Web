-- ============================================================
-- SmartCampus UTA - Script 03: Datos de Prueba
-- Ejecutar despues de 01_tablas.sql y 02_politicas_rls.sql
-- ============================================================

INSERT INTO usuarios (nombre, email, password_hash, rol) VALUES
    ('Juan Perez',        'juan.perez@uta.edu.ec',    'MTIzNDU2X3V0YV9zYWx0', 'estudiante'),
    ('Maria Garcia',      'maria.garcia@uta.edu.ec',  'MTIzNDU2X3V0YV9zYWx0', 'estudiante'),
    ('Admin UTA',         'admin@uta.edu.ec',          'MTIzNDU2X3V0YV9zYWx0', 'admin')
ON CONFLICT (email) DO NOTHING;

INSERT INTO nodos_campus (nombre, tipo, pos_x, pos_y) VALUES
    ('Entrada Principal',     'entrada',      100, 500),
    ('Biblioteca',            'edificio',     300, 300),
    ('Facultad de Sistemas',  'edificio',     500, 200),
    ('Cafeteria Central',     'cafeteria',    400, 450),
    ('Parqueadero Norte',     'parqueadero',  200, 100),
    ('Bienestar Estudiantil', 'edificio',     600, 400),
    ('Secretaria General',    'edificio',     350, 500)
ON CONFLICT DO NOTHING;

INSERT INTO rutas_campus (nodo_origen_id, nodo_destino_id, distancia, bidireccional)
SELECT o.id, d.id, paths.dist, true FROM (VALUES
    ('Entrada Principal',    'Biblioteca',            250),
    ('Entrada Principal',    'Secretaria General',    200),
    ('Biblioteca',           'Facultad de Sistemas',  220),
    ('Biblioteca',           'Cafeteria Central',     170),
    ('Facultad de Sistemas', 'Parqueadero Norte',     300),
    ('Cafeteria Central',    'Bienestar Estudiantil', 210),
    ('Secretaria General',   'Cafeteria Central',     150)
) AS paths(origen, destino, dist)
JOIN nodos_campus o ON o.nombre = paths.origen
JOIN nodos_campus d ON d.nombre = paths.destino
ON CONFLICT DO NOTHING;
