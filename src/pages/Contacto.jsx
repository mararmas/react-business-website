

const Contacto = () =>{
    return(
        
        

 
    <div 
    
    style={{
         backgroundImage:"url(https://media.glamour.mx/photos/66676795bdc58ee806af1da7/16:9/w_1920,c_limit/plantas-que-recomienda-el-feng-shui-para-la-oficina.jpg)", 
         backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh' ,marginTop: "130px" , paddingTop:"60px"}}>
          <div className="container">
         
            </div>  
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="p-4 bg-light bg-opacity-75 rounded">
              <form action="https://formsubmit.co/msa.proprete@gmail.com" method="POST">
                <fieldset>
                  <legend className="text-center header">Contáctanos</legend>

                  <div className="mb-3">
                    <label htmlFor="fname" className="form-label">
                      <i className="fa fa-user"></i> Nombre</label>
                    <input id="fname" name="name" type="text" placeholder="Nombre" className="form-control" required />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="lname" className="form-label">
                      <i className="fa fa-user"></i> Apellido</label>
                    <input id="lname" name="lastname" type="text" placeholder="Apellido" className="form-control" required/>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label"><i className="fa fa-envelope-o"></i> E-mail</label>
                    <input id="email" name="email" type="email" placeholder="E-mail" className="form-control" required />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label"><i className="fa fa-phone-square"></i> Teléfono</label>
                    <input id="phone" name="phone" type="text" placeholder="Teléfono" className="form-control" required/>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="message" className="form-label"><i className="fa fa-pencil-square-o"></i> Mensaje</label>
                    <textarea className="form-control" id="message" name="message" placeholder="Ingrese su mensaje para nosotros..." rows="7"required></textarea>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-secondary btn-lg">Enviar</button>
                  </div>
                  <input type="hidden" name= "_next" value="http://localhost:3000"/>
              <input type="hidden" name="_captcha" value="false"/>

                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    )
}
export default Contacto;