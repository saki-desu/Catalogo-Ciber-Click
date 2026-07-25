import { useState } from 'react'
import productos from '../data/productos.json'
import ProductCard from '../components/ProductCard'

function Buscar() {
  const [busqueda, setBusqueda] = useState('')

  const productosFiltrados = productos.filter(producto =>
    producto.nombre
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  )

  return (
    <div className='container'>
      <h1>Buscar productos</h1>

      <input
        type='text'
        placeholder='Buscar producto...'
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className='inputBuscar'
      />

      <div className='grid'>
        {productosFiltrados.map(producto => (
          <ProductCard key={producto.id} producto={producto} />
        ))}
      </div>
    </div>
  )
}

export default Buscar