// ============================================================
// SmartCampus UTA — Grafo.js
// Capa de Dominio: Estructura de Datos — Grafo + Dijkstra
// Usada en el módulo de Rutas del Campus
// ============================================================

export class Grafo {
    constructor() {
        this.nodos    = new Map(); // id → { nombre, tipo, pos_x, pos_y }
        this.adyacencias = new Map(); // id → [{ destino, distancia }]
    }

    agregarNodo(id, datos) {
        this.nodos.set(id, datos);
        if (!this.adyacencias.has(id)) this.adyacencias.set(id, []);
    }

    agregarArista(origenId, destinoId, distancia, bidireccional = true) {
        this.adyacencias.get(origenId)?.push({ destino: destinoId, distancia });
        if (bidireccional) {
            this.adyacencias.get(destinoId)?.push({ destino: origenId, distancia });
        }
    }

    /** Construir grafo desde arrays de Supabase */
    construirDesdeSupabase(nodos, rutas) {
        for (const n of nodos) {
            this.agregarNodo(n.id, { nombre: n.nombre, tipo: n.tipo, pos_x: n.pos_x, pos_y: n.pos_y });
        }
        for (const r of rutas) {
            this.agregarArista(r.nodo_origen_id, r.nodo_destino_id, r.distancia, r.bidireccional);
        }
    }

    /**
     * Algoritmo de Dijkstra — encuentra la ruta más corta
     * @param {string} origenId
     * @param {string} destinoId
     * @returns {{ distancia: number, ruta: string[] }} array de IDs en orden
     */
    dijkstra(origenId, destinoId) {
        const distancias = new Map();
        const anteriores = new Map();
        const visitados  = new Set();

        for (const id of this.nodos.keys()) {
            distancias.set(id, Infinity);
        }
        distancias.set(origenId, 0);

        while (true) {
            // Nodo no visitado con menor distancia
            let actual = null;
            let menorDist = Infinity;
            for (const [id, dist] of distancias) {
                if (!visitados.has(id) && dist < menorDist) {
                    menorDist = dist;
                    actual = id;
                }
            }

            if (actual === null || actual === destinoId) break;
            visitados.add(actual);

            for (const { destino, distancia } of (this.adyacencias.get(actual) || [])) {
                const nuevaDist = distancias.get(actual) + distancia;
                if (nuevaDist < distancias.get(destino)) {
                    distancias.set(destino, nuevaDist);
                    anteriores.set(destino, actual);
                }
            }
        }

        // Reconstruir ruta
        const ruta = [];
        let nodoActual = destinoId;
        while (nodoActual) {
            ruta.unshift(nodoActual);
            nodoActual = anteriores.get(nodoActual);
        }

        return {
            distancia: distancias.get(destinoId),
            ruta: ruta,
            nombres: ruta.map(id => this.nodos.get(id)?.nombre || id)
        };
    }
}
