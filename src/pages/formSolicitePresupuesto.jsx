const presupuesto =() =>{

    return(
        
          
        <div className="container col-md-4 mb-0 p-0">
          <div className="row">
          
            <div 
             style={{
                  
                   width:"500px",
                   right:"-30px", 
                   top:"250px",
                   position:"relative", }}> 
        
             <div className="row justify-content-center">
              <div className="col-md-8">
               <div className="p-4 bg-light bg-opacity-75 rounded">
        
                <form className="form-horizontal" method="post">
                 <fieldset>
                   <legend className="text-center header">Solicite presupuesto</legend>

                <div className="mb-3">
                <label htmlFor="fname" className="form-label"><i className="fa fa-user"></i> Teléfono de contacto</label>
                <input id="fname" name="name" type="text" placeholder="Teléfono" className="form-control" />
              </div>
              <div className="mb-3">
                <label htmlFor="lname" className="form-label"><i className="fa fa-user"></i> Correo electrónico</label>
                <input id="lname" name="name" type="text" placeholder="Correo" className="form-control" />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label"><i className="fa fa-envelope-o"></i> Zona</label>
                <input id="email" name="email" type="email" placeholder="Zona" className="form-control" />
              </div>

              

              <div className="text-center">
                <button type="submit" className="btn btn-secondary btn-sm">Enviar solicitud</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
      </div>
    </div>
    </div>
  </div>

        
    )
}
export default presupuesto;