// series.js (utils)
// Funciones puras: reciben datos y devuelven datos nuevos. No usan React.

import { ESTADOS } from '../data/series.js'

// 'Por ver' → 'Viendo' → 'Vista' → 'Por ver'
export function siguienteEstado(estado) {
  const posicion = ESTADOS.indexOf(estado)
  return ESTADOS[(posicion + 1) % ESTADOS.length]
}

// Clase CSS para la insignia: 'Por ver' → 'estado-por-ver'
export function claseEstado(estado) {
  return 'estado-' + estado.toLowerCase().replace(' ', '-')
}
