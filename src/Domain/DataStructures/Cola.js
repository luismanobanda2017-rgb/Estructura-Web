// ============================================================
// SmartCampus UTA — Cola.js
// Capa de Dominio: Estructura de Datos — Cola (FIFO)
// ============================================================

/**
 * TDA Cola (First In, First Out)
 * Usada en el módulo de Atención / Turnos
 */
export class Cola {
    constructor() {
        this.elementos = [];
    }

    /** Agregar elemento al final de la cola */
    encolar(elemento) {
        this.elementos.push(elemento);
    }

    /** Eliminar y retornar el primer elemento */
    desencolar() {
        if (this.estaVacia()) throw new Error('La cola está vacía');
        return this.elementos.shift();
    }

    /** Ver el primero sin eliminarlo */
    frente() {
        if (this.estaVacia()) return null;
        return this.elementos[0];
    }

    estaVacia() {
        return this.elementos.length === 0;
    }

    tamano() {
        return this.elementos.length;
    }

    toArray() {
        return [...this.elementos];
    }
}
