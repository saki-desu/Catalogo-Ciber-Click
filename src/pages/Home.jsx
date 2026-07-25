import productos from "../data/productos.json";
import { Link } from "react-router-dom";

function Home({ busqueda }) {

  const categorias = [
    "Libretas",
    "Folders",
    "Plumas",
    "Colores",
    "Pegamento"
  ];

  const texto = (busqueda || "").toLowerCase();

  const productosFiltrados = productos.filter((producto) => {

    return (
      producto.nombre?.toLowerCase().includes(texto) ||
      producto.categoria?.toLowerCase().includes(texto) ||
      producto.modelo?.toLowerCase().includes(texto) ||
      producto.tipos?.some(tipo =>
        tipo.toLowerCase().includes(texto)
      ) ||
      producto.alias?.some(alias =>
        alias.toLowerCase().includes(texto)
      )
    );
  });

// SI HAY BÚSQUEDA
if (busqueda && busqueda.trim() !== "") {

  return (
    <div className="container">

      <h2 className="categoria-titulo">
        Resultados de búsqueda
      </h2>

      <div
        className={
          productosFiltrados.length === 1
            ? "grid-unico"
            : "grid"
        }
      >

        {productosFiltrados.map((producto) => (
          <Link
            to={`/producto/${producto.id}`}
            className="card-link"
            key={producto.id}
          >
            <div className="card">
              <img
                src={producto.imagenes?.[0] || producto.imagen}
                alt={producto.nombre}
              />

              <div className="card-content">

                <h3>{producto.nombre}</h3>

                {producto.modelo && (
                  <p className="modelo">
                    {producto.modelo}
                  </p>
                )}

                {producto.tipos && (
                  <ul className="tipos">

                    {producto.tipos.map((tipo, index) => (
                      <li key={index}>
                        {tipo}
                      </li>
                    ))}

                  </ul>
                )}

              </div>

            </div>
          </Link>
        ))}

        {productosFiltrados.length === 0 && (
          <div className="sin-resultados">
            No se encontraron productos.
          </div>
        )}

      </div>
    </div>
  );
}

  // HOME NORMAL
  return (
    <div className="container">

      {categorias.map((categoria) => {

        const productosCategoria = productos
          .filter(
            producto => producto.categoria === categoria
          )
          .slice(0, 4);

        return (

          <div key={categoria}>

            <h2 className="categoria-titulo">
              {categoria}
            </h2>

            <div className="grid">

              {productosCategoria.map((producto) => (

  <Link
    to={`/producto/${producto.id}`}
    className="card-link"
    key={producto.id}
  >

    <div className="card">

      <img
      src={producto.imagenes?.[0] || producto.imagen}
      alt={producto.nombre}
      />

      <div className="card-content">

        <h3>{producto.nombre}</h3>

        {producto.modelo && (
          <p className="modelo">
            {producto.modelo}
          </p>
        )}

        {producto.tipos && (
          <ul className="tipos">

            {producto.tipos.map((tipo, index) => (
              <li key={index}>
                {tipo}
              </li>
            ))}

          </ul>
        )}

      </div>

    </div>

  </Link>

))}

            </div>

          </div>

        );
      })}

    </div>
  );

}
export default Home;