// ============================================================
// SmartCampus UTA — ListaEnlazada.js
// Capa de Dominio: Estructura de Datos — Lista Enlazada Simple
// Usada en el módulo de Trámites
// ============================================================

class Nodo {
    constructor(dato) {
        this.dato     = dato;
        this.siguiente = null;
    }
}

export class ListaEnlazada {
    constructor() {
        this.cabeza = null;
        this.tamano = 0;
    }

    /** Insertar al final */
    insertar(dato) {
        const nuevo = new Nodo(dato);
        if (!this.cabeza) {
            this.cabeza = nuevo;
        } else {
            let actual = this.cabeza;
            while (actual.siguiente) actual = actual.siguiente;
            actual.siguiente = nuevo;
        }
        this.tamano++;
    }

    /** Eliminar por id del dato */
    eliminar(id) {
        if (!this.cabeza) return false;
        if (this.cabeza.dato.id === id) {
            this.cabeza = this.cabeza.siguiente;
            this.tamano--;
            return true;
        }
        let actual = this.cabeza;
        while (actual.siguiente) {
            if (actual.siguiente.dato.id === id) {
                actual.siguiente = actual.siguiente.siguiente;
                this.tamano--;
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }

    /** Convertir a array para mostrar en UI */
    toArray() {
        const resultado = [];
        let actual = this.cabeza;
        while (actual) {
            resultado.push(actual.dato);
            actual = actual.siguiente;
        }
        return resultado;
    }

    estaVacia() {
        return this.cabeza === null;
    }
}
