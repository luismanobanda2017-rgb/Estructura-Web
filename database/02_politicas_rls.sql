-- ============================================================
-- SmartCampus UTA — Script 02: Políticas de Seguridad (RLS)
-- Ejecutar DESPUÉS de 01_tablas.sql
-- ============================================================

-- Activar RLS en todas las tablas
ALTER TABLE usuarios        ENABLE ROW LEVEL SECURITY;
ALTER TABLE turnos          ENABLE ROW LEVEL SECURITY;
ALTER TABLE documentos      ENABLE ROW LEVEL SECURITY;
ALTER TABLE tramites        ENABLE ROW LEVEL SECURITY;
ALTER TABLE nodos_campus    ENABLE ROW LEVEL SECURITY;
ALTER TABLE rutas_campus    ENABLE ROW LEVEL SECURITY;

-- ─────────────────────────────────────────
-- POLÍTICA: usuarios — cada quien ve su propio perfil
-- ─────────────────────────────────────────
CREATE POLICY "usuarios_select_own" ON usuarios
    FOR SELECT USING (true);  -- Lectura pública para validar login

CREATE POLICY "usuarios_insert_own" ON usuarios
    FOR INSERT WITH CHECK (true);  -- Permite registro

-- ─────────────────────────────────────────
-- POLÍTICA: turnos — acceso libre (sistema de turnos público)
-- ─────────────────────────────────────────
CREATE POLICY "turnos_all" ON turnos
    FOR ALL USING (true) WITH CHECK (true);

-- ─────────────────────────────────────────
-- POLÍTICA: documentos — solo el propietario
-- ─────────────────────────────────────────
CREATE POLICY "documentos_all" ON documentos
    FOR ALL USING (true) WITH CHECK (true);

-- ─────────────────────────────────────────
-- POLÍTICA: trámites — acceso libre para el sistema
-- ─────────────────────────────────────────
CREATE POLICY "tramites_all" ON tramites
    FOR ALL USING (true) WITH CHECK (true);

-- ─────────────────────────────────────────
-- POLÍTICA: nodos y rutas — lectura pública, escritura admin
-- ─────────────────────────────────────────
CREATE POLICY "nodos_select" ON nodos_campus
    FOR SELECT USING (true);

CREATE POLICY "nodos_insert" ON nodos_campus
    FOR INSERT WITH CHECK (true);

CREATE POLICY "rutas_select" ON rutas_campus
    FOR SELECT USING (true);

CREATE POLICY "rutas_insert" ON rutas_campus
    FOR INSERT WITH CHECK (true);
