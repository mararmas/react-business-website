import React, { useState } from 'react';

const Presupuesto = () => {
  const [formStatus, setFormStatus] = useState(''); // Estado para manejar el texto del botón

  const handleSubmit = (event) => {
    event.preventDefault(); // Evita el refresco de la página

    // Cambia el estado a 'Enviando...' al empezar el envío
    setFormStatus('Enviando...');

    // Enviar el formulario utilizando FormSubmit
    const form = event.target;

    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
    })
      .then((response) => {
        if (response.ok) {
          setFormStatus('Enviado con éxito!'); // Cambia el estado a 'Enviado!' si la respuesta es exitosa
          form.reset(); // Opcional: reinicia el formulario
        } else {
          setFormStatus('Error'); // Cambia el estado a 'Error' si hubo un problema
          alert("Hubo un problema al enviar el formulario.");
        }
      })
      .catch((error) => {
        setFormStatus('Error'); // Cambia el estado a 'Error' si ocurrió una excepción
        console.error("Error:", error);
        alert("Hubo un problema al enviar el formulario.");
      });
  };

  return (
    <div className="container col-md-4 mb-0 p-0">
      <div className="row">
        <div
          style={{
            width: "500px",
            right: "-30px",
            top: "250px",
            position: "relative",
          }}
        >
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="p-4 bg-light bg-opacity-75 rounded">
                <form
                  action="https://formsubmit.co/msa.proprete@gmail.com"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <fieldset>
                    <legend className="text-center header">Solicite presupuesto</legend>

                    <div className="mb-3">
                      <label htmlFor="fname" className="form-label">
                        <i className="fa fa-user"></i> Teléfono de contacto
                      </label>
                      <input
                        id="fname"
                        name="name"
                        type="text"
                        placeholder="Teléfono"
                        className="form-control"
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="lname" className="form-label">
                        <i className="fa fa-user"></i> Correo electrónico
                      </label>
                      <input
                        id="lname"
                        name="email"
                        type="email"
                        placeholder="Correo"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="zone" className="form-label">
                        <i className="fa fa-envelope-o"></i> Zona
                      </label>
                      <input
                        id="zone"
                        name="zone"
                        type="text"
                        placeholder="Zona"
                        className="form-control"
                        required
                      />
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-sm"
                        disabled={formStatus === 'Enviado con éxito!' || formStatus === 'Enviando...'}
                      >
                        {formStatus || 'Enviar solicitud'}
                      </button>
                    </div>
                    <input type="hidden" name="_next" value="http://localhost:3000" />
                    <input type="hidden" name="_captcha" value="false" />
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presupuesto;
