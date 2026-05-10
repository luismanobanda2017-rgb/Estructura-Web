// ============================================================
// SmartCampus UTA — supabaseClient.js
// Capa de Persistencia: Conexión a Supabase
// ============================================================
// INSTRUCCIONES:
//   1. Crea un archivo llamado ".env" en la raíz del proyecto
//   2. Agrega estas líneas adentro del .env:
//        SUPABASE_URL=https://uizabeaqthcsxuimclji.supabase.co
//        SUPABASE_ANON_KEY=eyJ...tu_clave_aqui
//   3. El .gitignore ya está configurado para que .env NO suba a GitHub
// ============================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

// Para frontend puro (sin Node.js), pega tus credenciales aquí SOLO EN LOCAL:
const SUPABASE_URL     = 'https://uizabeaqthcsxuimclji.supabase.co';
const SUPABASE_ANON_KEY = 'PEGAR_ANON_KEY_AQUI'; // Obtener de: Supabase → Settings → API → anon public

// ⚠️ La anon key es SEGURA para el frontend porque Supabase usa RLS (Row Level Security)
// ❌ NUNCA pongas aquí la "service_role key" — esa sí es privada

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ─────────────────────────────────────────
// FUNCIONES DE AUTENTICACIÓN
// ─────────────────────────────────────────

/**
 * Registrar un nuevo usuario en la tabla 'usuarios'
 * @param {string} nombre - Nombre completo
 * @param {string} email - Correo institucional
 * @param {string} password - Contraseña en texto plano (se guardará como hash simple)
 */
export async function registrarUsuario(nombre, email, password) {
    // Hash simple con btoa (en producción usar bcrypt o Supabase Auth)
    const passwordHash = btoa(password + '_uta_salt');

    const { data, error } = await supabase
        .from('usuarios')
        .insert([{ nombre, email, password_hash: passwordHash, rol: 'estudiante' }])
        .select()
        .single();

    if (error) throw new Error('Error al registrar: ' + error.message);
    return data;
}

/**
 * Iniciar sesión verificando email y contraseña
 * @param {string} email
 * @param {string} password
 * @returns {object} usuario si es válido
 */
export async function iniciarSesion(email, password) {
    const passwordHash = btoa(password + '_uta_salt');

    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email)
        .eq('password_hash', passwordHash)
        .single();

    if (error || !data) throw new Error('Correo o contraseña incorrectos.');

    // Guardar sesión en localStorage
    localStorage.setItem('smartcampus_usuario', JSON.stringify(data));
    return data;
}

/**
 * Obtener el usuario actualmente logueado
 * @returns {object|null}
 */
export function obtenerUsuarioActual() {
    const raw = localStorage.getItem('smartcampus_usuario');
    return raw ? JSON.parse(raw) : null;
}

/**
 * Cerrar sesión
 */
export function cerrarSesion() {
    localStorage.removeItem('smartcampus_usuario');
    window.location.href = 'index.html';
}
