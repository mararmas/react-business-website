const Elegirnos = () => {
  return (
    <div className="p-5" style={{ marginTop: "10px" }}>
      <h1 className="text-center p-5">¿Por qué elegirnos?</h1>

      <div className="container custom-bg p-5">
        <div className="row">
          {/* Bloque 1 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <img
              src="https://www.esan.edu.pe/images/blog/20230530/mMLM8Y.jpg"
              className="rounded w-100"
              alt="imagen"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="p-1">
              <h5 className="text-center" style={{ fontSize: "30px", color: "#555" }}>
                Economía
              </h5>
              <p style={{ fontSize: "20px" }}>
                La eficiencia de nuestro personal, directamente formado por
                nosotros, nos permite ofrecer los precios más competitivos del
                mercado junto con una excelente calidad.
              </p>
            </div>
          </div>

          {/* Bloque 2 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <img
              src="/manos-tierra-nino.jpg"
              className="rounded w-100"
              alt="imagen"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="p-1">
              <h5 className="text-center" style={{ fontSize: "30px", color: "#555" }}>
                Medioambiente
              </h5>
              <p style={{ fontSize: "20px" }}>
                Utilizamos exclusivamente productos naturales y ecológicos que
                no dañan el medioambiente ni afectan la calidad del aire en tu
                hogar o negocio. Con nosotros, puedes disfrutar de ventanas
                impecables sin comprometer el bienestar del planeta.
              </p>
            </div>
          </div>

          {/* Bloque 3 */}
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <img
              src="https://limpiezasalfil.com/wp-content/uploads/2018/10/limpiar-cristales-en-altura-con-p%C3%A9rtiga-e1540375213971.jpg"
              className="rounded w-100"
              alt="imagen"
              style={{ height: "200px", objectFit: "cover" }}
            />
            <div className="p-1">
              <h5 className="text-center" style={{ fontSize: "30px", color: "#555" }}>
                Seguridad
              </h5>
              <p style={{ fontSize: "20px" }}>
                Cumplimos estrictamente con la legislación en materia de
                seguridad laboral y todas nuestras intervenciones están cubiertas
                por un seguro de responsabilidad civil.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegirnos;
