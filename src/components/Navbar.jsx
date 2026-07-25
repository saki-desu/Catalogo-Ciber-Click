import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import productos from "../data/productos.json";

function Navbar({ busqueda, setBusqueda }) {

  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarSugerencias, setMostrarSugerencias] = useState(false);
  const navigate = useNavigate();
  const buscadorRef = useRef(null);

  useEffect(() => {

  function cerrarSugerencias(e){

    if(
      buscadorRef.current &&
      !buscadorRef.current.contains(e.target)
    ){

      setMostrarSugerencias(false);

    }

  }

  document.addEventListener("click", cerrarSugerencias);

  return () => {

    document.removeEventListener("click", cerrarSugerencias);

  };

}, []);

  const texto = busqueda.toLowerCase();

const sugerencias = texto
  ? productos
      .filter(producto =>
        producto.nombre?.toLowerCase().includes(texto) ||
        producto.categoria?.toLowerCase().includes(texto) ||
        producto.modelo?.toLowerCase().includes(texto) ||
        producto.tipos?.some(tipo =>
          tipo.toLowerCase().includes(texto)
        ) ||
        producto.alias?.some(alias =>
          alias.toLowerCase().includes(texto)
        )
      )
      .slice(0, 8)
  : [];

  return (
    <>
      <nav className="navbar">

        <div className="logo-container">
          <a href="/">
          <img src="/CiberLogo.png" alt="Logo" />
          </a>
          <h2>Catálogo Ciber Click</h2>
        </div>

        <div className="navbar-search" ref={buscadorRef}
          >
          <label htmlFor="buscar">🔎 Buscar:</label>
         <input
          id="buscar"
          type="text"
          placeholder="Encuentra Lo Que Necesites En Ciber Click"
          value={busqueda}
          
          onChange={(e)=>{ setBusqueda(e.target.value); 
            setMostrarSugerencias(true);}}
          onKeyDown={(e) => {

            if (e.key !== "Enter") return;

            if (sugerencias.length === 1) {

              setMostrarSugerencias(false);

              e.target.blur();

              navigate(`/producto/${sugerencias[0].id}`);

            } else {

              setMostrarSugerencias(false);

              e.target.blur();

            }

          }}
          />

          {mostrarSugerencias && sugerencias.length > 0 && (

          <div className="sugerencias">

            {sugerencias.map((producto) => (

              <div
                key={producto.id}
                className="sugerencia-item"
                onClick={() => {

                  navigate(`/producto/${producto.id}`);

                  setBusqueda("");

                  setMostrarSugerencias(false);

                }}
              >
                {producto.nombre}

                {producto.modelo &&
                  ` - ${producto.modelo}`}
              </div>

            ))}

          </div>

        )}
        </div>

        <button
          className="btn-monografias"
          onClick={() => setMostrarModal(true)}
        >
          📚 Monografías
        </button>

      </nav>

      {/* MODAL MONOGRAFÍAS */}
      {mostrarModal && (
        <div
          className="modal-overlay"
          onClick={() => setMostrarModal(false)}
        >
          <div
            className="modal-box"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>📚 Monografías y Biografías</h2>
            <p>
              Contamos con varios tipos de monografías y biografías
              que necesites. Si tienes dudas sobre las existencias,
              contáctanos por WhatsApp y con gusto te ayudamos.
            </p>
            <button
              className="modal-cerrar"
              onClick={() => setMostrarModal(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;