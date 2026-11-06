// App.jsx
// Arma el tablero con los componentes y los datos del club.

import { useState } from 'react'
import { ESTADOS, seriesIniciales } from './data/series.js'
import { siguienteEstado } from './utils/series.js'
import Pagina from './componentes/layout/Pagina.jsx'
import Panel from './componentes/comunes/Panel.jsx'
import ListaSeries from './componentes/series/ListaSeries.jsx'
import Resumen from './componentes/resumen/Resumen.jsx'
import FormularioSerie from './componentes/formulario/FormularioSerie.jsx'
import Filtros from './componentes/filtros/Filtros.jsx'

function App() {

  //estado
  const [series, setSeries] = useState(seriesIniciales)

  const [filtroEstado, setFiltroEstado] = useState('Todos')
  const [filtroMiembro, setFiltroMiembro] = useState('Todos')

  // ── Estado derivado: se calcula cada vez que App se dibuja ──
  const visibles = series.filter(
    (serie) =>
      (filtroEstado === 'Todos' || serie.estado === filtroEstado) &&
      (filtroMiembro === 'Todos' || serie.miembro === filtroMiembro)
  )

  const conteos = ESTADOS.map((estado) => ({
    estado: estado,
    cantidad: series.filter((serie) => serie.estado === estado).length,
  }))

  function agregar(datos) {
    const nueva = { ...datos, id: Date.now(), estado: 'Por ver' }
    setSeries([...series, nueva])
  }

  // ── Cambios del estado (sin modificar el arreglo original) ──
  function avanzar(id) {
    const nuevas = series.map((serie) => serie.id === id ? { ...serie, estado: siguienteEstado(serie.estado) } : serie)
    setSeries(nuevas)
  }

  function quitar(id) {
    const nuevas = series.filter((serie) => serie.id !== id)
    setSeries(nuevas)
  }

  return (
    <Pagina>

      <div className="row g-4">
        <div className="col-lg-8">

          <Panel titulo="Filtros">
            <Filtros
              estado={filtroEstado}
              miembro={filtroMiembro}
              onCambiarEstado={setFiltroEstado}
              onCambiarMiembro={setFiltroMiembro}
            />
          </Panel>

          <Panel titulo={`Series del club (${visibles.length})`}>
            <ListaSeries series={visibles} onAvanzar={avanzar} onQuitar={quitar} />
          </Panel>

        </div>

        <div className="col-lg-4">

          <Panel titulo="Resumen">
            <Resumen conteos={conteos} />
          </Panel>

          <Panel titulo="Agregar una serie">
            <FormularioSerie onAgregar={agregar} />
          </Panel>

        </div>

      </div>

    </Pagina>
  )
}

export default App
