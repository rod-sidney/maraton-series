// series.js  (ASSET: viene en el zip)
// Datos iniciales del club de series. Cada serie tiene un id que no se repite.

export const ESTADOS = ['Por ver', 'Viendo', 'Vista']

export const MIEMBROS = ['Ana', 'Luis', 'Sofía', 'Diego']

export const GENEROS = ['Drama', 'Comedia', 'Ciencia ficción', 'Animación', 'Documental']

export const seriesIniciales = [
  { id: 1, titulo: 'Dark', genero: 'Ciencia ficción', temporadas: 3, estado: 'Vista', miembro: 'Ana' },
  { id: 2, titulo: 'The Office', genero: 'Comedia', temporadas: 9, estado: 'Viendo', miembro: 'Luis' },
  { id: 3, titulo: 'Arcane', genero: 'Animación', temporadas: 2, estado: 'Por ver', miembro: 'Sofía' },
  { id: 4, titulo: 'Chernobyl', genero: 'Drama', temporadas: 1, estado: 'Vista', miembro: 'Diego' },
  { id: 5, titulo: 'Planeta Tierra', genero: 'Documental', temporadas: 3, estado: 'Por ver', miembro: 'Ana' },
]
