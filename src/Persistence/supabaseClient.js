// ============================================================
// SmartCampus UTA - supabaseClient.js
// Capa de Persistencia: conexion a Supabase
// ============================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://uizabeaqthcsxuimclji.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpemFiZWFxdGhjc3h1aW1jbGppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0MzE4MjUsImV4cCI6MjA5NDAwNzgyNX0.H4vQ555fMICjG3c7qwY8n6dc_hYKcDZcaOMS-a4H9H4';

// La anon key puede estar en el frontend. Nunca publiques la service_role key.
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

function normalizarEmail(email) {
    return email.trim().toLowerCase();
}

function generarPasswordHash(password) {
    return btoa(password + '_uta_salt');
}

export async function registrarUsuario(nombre, email, password) {
    const emailNormalizado = normalizarEmail(email);

    if (!emailNormalizado.endsWith('@uta.edu.ec')) {
        throw new Error('Usa tu correo institucional (@uta.edu.ec).');
    }

    const { data, error } = await supabase
        .from('usuarios')
        .insert([{
            nombre: nombre.trim(),
            email: emailNormalizado,
            password_hash: generarPasswordHash(password),
            rol: 'estudiante'
        }])
        .select()
        .single();

    if (error?.code === '23505') {
        throw new Error('Ese correo ya esta registrado.');
    }

    if (error) {
        throw new Error('Error al registrar: ' + error.message);
    }

    localStorage.setItem('smartcampus_usuario', JSON.stringify(data));
    return data;
}

export async function iniciarSesion(email, password) {
    const { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', normalizarEmail(email))
        .eq('password_hash', generarPasswordHash(password))
        .single();

    if (error || !data) {
        throw new Error('Correo o contrasena incorrectos.');
    }

    localStorage.setItem('smartcampus_usuario', JSON.stringify(data));
    return data;
}

export function obtenerUsuarioActual() {
    const raw = localStorage.getItem('smartcampus_usuario');
    return raw ? JSON.parse(raw) : null;
}

export function cerrarSesion() {
    localStorage.removeItem('smartcampus_usuario');
    window.location.href = 'index.html';
}
