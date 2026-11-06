// TarjetaSerie.jsx
// Muestra una serie. Recibe dos props de tipo función: onAvanzar y onQuitar.
// No cambia el estado: le avisa al padre (App) qué pasó.

import { claseEstado } from '../../utils/series.js'

function TarjetaSerie({ serie, onAvanzar, onQuitar }) {
  return (
    <article className="card h-100 tarjeta-serie">
      <div className="card-body d-flex flex-column">
        <span className={'badge align-self-start mb-2 ' + claseEstado(serie.estado)}>
          {serie.estado}
        </span>
        <h3 className="h6 card-title">{serie.titulo}</h3>
        <p className="card-text small text-secondary mb-3">
          {serie.genero} · {serie.temporadas} {serie.temporadas === 1 ? 'temporada' : 'temporadas'} · propuesta por {serie.miembro}
        </p>
        <div className="mt-auto d-flex gap-2">
          <button className="btn btn-sm btn-primary" onClick={() => onAvanzar(serie.id)}>
            Cambiar estado
          </button>
          <button className="btn btn-sm btn-outline-danger" onClick={() => onQuitar(serie.id)}>
            Quitar
          </button>
        </div>
      </div>
    </article>
  )
}

export default TarjetaSerie
