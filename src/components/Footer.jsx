function Footer() {
  return (
    <footer className="footer">

      <div className="footer-contenido">

        <div className="footer-info">

          <p>¿Tienes dudas? ¡Contáctanos!</p>

          <div className="footer-contacto">

            <a
              href="https://wa.me/4931032910"
              target="_blank"
              rel="noreferrer"
              className="footer-btn footer-btn-whatsapp"
            >
              <img src="/what.png" alt="WhatsApp" />
              WhatsApp — 493 103 29 10
            </a>

            <a
              href="https://www.facebook.com/anita.amaro.7?locale=es_LA"
              target="_blank"
              rel="noreferrer"
              className="footer-btn footer-btn-facebook"
            >
              <img src="/facebook.png" alt="Facebook" />
              Facebook — Anita Amaro Ciber Click
            </a>

          </div>

        </div>

      </div>

      <p className="footer-copy">
        © 2026 Catálogo Ciber Click — Todos los derechos reservados
      </p>

    </footer>
  );
}

export default Footer;