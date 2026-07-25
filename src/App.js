import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProductoDetalle from "./pages/ProductoDetalle";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <BrowserRouter>

      <Navbar
        busqueda={busqueda}
        setBusqueda={setBusqueda}
      />

      <Routes>

        <Route
          path="/"
          element={
            <Home busqueda={busqueda} />
          }
        />

        <Route
          path="/producto/:id"
          element={<ProductoDetalle />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;