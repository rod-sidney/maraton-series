// validarSerie.js
// Revisa los datos del formulario y devuelve un objeto con un mensaje
// por cada campo que tenga un problema.
// Si todo está bien, devuelve un objeto vacío: {}

export function validarSerie(datos) {
  const errores = {}

  if (datos.titulo.trim().length < 2) {
    errores.titulo = 'Escriba un título de al menos 2 caracteres.'
  }

  if (datos.genero === '') {
    errores.genero = 'Elija un género.'
  }

  const temporadas = Number(datos.temporadas)
  if (!Number.isInteger(temporadas) || temporadas < 1 || temporadas > 30) {
    errores.temporadas = 'Indique un número entero entre 1 y 30.'
  }

  if (datos.miembro === '') {
    errores.miembro = 'Indique quién propone la serie.'
  }

  return errores
}
