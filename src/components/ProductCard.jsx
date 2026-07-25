function ProductCard({ producto }) {

  return (
    <div className="card" key={producto.id}>

  <img
    src={producto.imagen}
    alt={producto.nombre}
  />

  <h3>{producto.nombre}</h3>

  <p className="modelo">
    {producto.modelo}
  </p>

  <ul className="tipos-lista">
    {producto.tipos.map((tipo, index) => (
      <li key={index}>{tipo}</li>
    ))}
  </ul>

  <button>
    Ver producto
  </button>

</div>
  )
}

export default ProductCard