// ============================================================
// SmartCampus UTA — Arbol.js
// Capa de Dominio: Estructura de Datos — Árbol N-ario
// Usada en el módulo de Documentos
// ============================================================

export class NodoArbol {
    constructor(id, nombre, tipo, parentId = null) {
        this.id       = id;
        this.nombre   = nombre;
        this.tipo     = tipo;       // 'carpeta' | 'archivo'
        this.parentId = parentId;
        this.hijos    = [];
    }

    agregarHijo(nodo) {
        this.hijos.push(nodo);
    }
}

export class Arbol {
    constructor() {
        this.raiz = null;
        this.mapa = new Map(); // id → NodoArbol
    }

    /** Construir árbol desde array plano de Supabase */
    construirDesdeArray(registros) {
        this.mapa.clear();
        this.raiz = null;

        // Primer paso: crear todos los nodos
        for (const r of registros) {
            this.mapa.set(r.id, new NodoArbol(r.id, r.nombre, r.tipo, r.parent_id));
        }

        // Segundo paso: conectar padre → hijo
        for (const nodo of this.mapa.values()) {
            if (nodo.parentId === null) {
                this.raiz = nodo;
            } else {
                const padre = this.mapa.get(nodo.parentId);
                if (padre) padre.agregarHijo(nodo);
            }
        }
    }

    /** Buscar nodo por id */
    buscar(id) {
        return this.mapa.get(id) || null;
    }

    /** Recorrido en profundidad (DFS) */
    recorrerDFS(nodo = this.raiz, resultado = []) {
        if (!nodo) return resultado;
        resultado.push(nodo);
        for (const hijo of nodo.hijos) {
            this.recorrerDFS(hijo, resultado);
        }
        return resultado;
    }
}
