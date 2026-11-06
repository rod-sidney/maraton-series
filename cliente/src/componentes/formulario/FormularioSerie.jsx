// FormularioSerie.jsx
// Formulario CONTROLADO para agregar una serie.
// Cada campo muestra el valor del estado y onChange lo actualiza.
// Al enviar, valida y muestra el error junto a cada campo.
// No sabe dónde se guarda la serie: se la entrega a App con onAgregar.

import { useState } from 'react'
import { GENEROS, MIEMBROS } from '../../data/series.js'
import { validarSerie } from '../../utils/validarSerie.js'

const VACIO = { titulo: '', genero: '', temporadas: '', miembro: '' }

function FormularioSerie({ onAgregar }) {
    const [datos, setDatos] = useState(VACIO)
    const [errores, setErrores] = useState({})

    // Un solo manejador para todos los campos: usa el atributo name
    function cambiar(event) {
        const { name, value } = event.target
        setDatos({ ...datos, [name]: value })
    }

    function enviar(event) {
        event.preventDefault()
        const nuevosErrores = validarSerie(datos)
        setErrores(nuevosErrores)

        if (Object.keys(nuevosErrores).length > 0) {
            return
        }

        onAgregar({
            ...datos, titulo: datos.titulo.trim(), temporadas:
                Number(datos.temporadas)
        })
        setDatos(VACIO)
    }

    return (
        <form onSubmit={enviar} noValidate>
            <div className="mb-3">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input
                    id="titulo"
                    name="titulo"
                    className={errores.titulo ? 'form-control is-invalid' : 'form-control'}
                    value={datos.titulo}
                    onChange={cambiar}
                />
                {errores.titulo && <div className="invalid-feedback">{errores.titulo}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="genero" className="form-label">Género</label>
                <select
                    id="genero"
                    name="genero"
                    className={errores.genero ? 'form-select is-invalid' : 'form-select'}
                    value={datos.genero}
                    onChange={cambiar}
                >
                    <option value="">Elija…</option>
                    {GENEROS.map((opcion) => (
                        <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
                </select>
                {errores.genero && <div className="invalid-feedback">{errores.genero}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="temporadas" className="form-label">Temporadas</label>
                <input
                    id="temporadas"
                    name="temporadas"
                    type="number"
                    className={errores.temporadas ? 'form-control is-invalid' : 'form-control'}
                    value={datos.temporadas}
                    onChange={cambiar}
                />
                {errores.temporadas && <div className="invalid-feedback">{errores.temporadas}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="miembro" className="form-label">Propuesta por</label>
                <select
                    id="miembro"
                    name="miembro"
                    className={errores.miembro ? 'form-select is-invalid' : 'form-select'}
                    value={datos.miembro}
                    onChange={cambiar}
                >
                    <option value="">Elija…</option>
                    {MIEMBROS.map((opcion) => (
                        <option key={opcion} value={opcion}>{opcion}</option>
                    ))}
                </select>
                {errores.miembro && <div className="invalid-feedback">{errores.miembro}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Agregar serie
            </button>
        </form>
    )
}

export default FormularioSerie