import productos from "../data/productos.json";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductoDetalle() {

  const { id } = useParams();
  const navigate = useNavigate( );  

  const producto = productos.find(
    p => p.id.toString() === id
  );

  const imagenes = producto?.imagenes || [producto?.imagen];

  const [imagenActiva, setImagenActiva] = useState(
    imagenes[0]
  );

  const indiceActual = imagenes.indexOf(imagenActiva);

 useEffect(() => {
  if (imagenes.length > 0) {
    setImagenActiva(imagenes[0]);
  }
}, [id, imagenes]);
const imagenAnterior = () => {

  const nuevoIndice =
    indiceActual === 0
      ? imagenes.length - 1
      : indiceActual - 1;

  setImagenActiva(imagenes[nuevoIndice]);

};

const imagenSiguiente = () => {

  const nuevoIndice =
    indiceActual === imagenes.length - 1
      ? 0
      : indiceActual + 1;

  setImagenActiva(imagenes[nuevoIndice]);

};

  if (!producto) {
    return <h2>Producto no encontrado</h2>;
  }

  return (
    <div className="detalle-container">

       <button
          className="btn-regresar"
          onClick={() => navigate(-1)}
       >
       ← Regresar
      </button>

      <div className="detalle-card">

        <div className="detalle-imagen">

    <div className="detalle-imagen-box">

        {imagenes.length > 1 && (
            <button
                className="flecha izquierda"
                onClick={imagenAnterior}
            >
                ❮
            </button>
        )}

        <img
            src={imagenActiva}
            alt={producto.nombre}
            className="detalle-imagen-principal"
            onMouseMove={(e) => {

                const x =
                  (e.nativeEvent.offsetX /
                  e.target.offsetWidth) * 100;

                const y =
                  (e.nativeEvent.offsetY /
                  e.target.offsetHeight) * 100;

                e.target.style.transformOrigin =
                  `${x}% ${y}%`;

            }}
        />

        {imagenes.length > 1 && (
            <button
                className="flecha derecha"
                onClick={imagenSiguiente}
            >
                ❯
            </button>
        )}

    </div>

    {imagenes.length > 1 && (
        <p className="contador-imagen">
            {indiceActual + 1} / {imagenes.length}
        </p>
    )}

</div>

        <div className="detalle-info">

          <h1>{producto.nombre}</h1>

          {producto.modelo && (
            <h3>{producto.modelo}</h3>
          )}

          <p className="detalle-categoria">
            Categoría: {producto.categoria}
          </p>

          {producto.tipos && (
            <>
              <h4>Tipos disponibles:</h4>

              <ul>

                {producto.tipos.map((tipo, index) => (
                  <li key={index}>
                    {tipo}
                  </li>
                ))}

              </ul>
            </>
          )}

          <h4>Descripción</h4>

          <p>
            {producto.descripcion ||
              "Producto disponible en Ciber Click."}
          </p>

        </div>

      </div>

    </div>
  );
}

export default ProductoDetalle;