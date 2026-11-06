// ListaSeries.jsx
// Dibuja una TarjetaSerie por serie, o un mensaje si la lista está vacía.

import TarjetaSerie from './TarjetaSerie.jsx'

function ListaSeries({ series, onAvanzar, onQuitar }) {
  if (series.length === 0) {
    return (
      <div className="alert alert-info mb-0">
        Ninguna serie coincide con los filtros.
      </div>
    )
  }

  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
      {series.map((serie) => (
        <div className="col" key={serie.id}>
          <TarjetaSerie serie={serie} onAvanzar={onAvanzar} onQuitar={onQuitar} />
        </div>
      ))}
    </div>
  )
}

export default ListaSeries
