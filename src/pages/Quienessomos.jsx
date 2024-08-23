import './Header.css';
const Quienessomos = () =>{
    return(
        <div>
        <div class="container mt-20" style={{marginTop: "130px"}}>
            <div className="row">
                <div className="col-md-7 p-5">
            <h2 className= "mb-5">¿Quienes somos?</h2>

            <p>
              
              <h5 className="mb-3"><b>Sobre nosotros</b></h5>
                  <p className="mb-5">En Msa Propreté, somos un equipo de profesionales dedicados exclusivamente a la limpieza de cristales. 
                    Con años de experiencia en el sector, nos destacamos por nuestra atención al detalle, compromiso con la calidad y la 
                    satisfacción del cliente.</p>
  
                  <h5 className="mb-3"><b>Nuestra Misión</b></h5>
                   <p className="mb-5">Nuestra misión es ofrecer un servicio de limpieza de cristales impecable, asegurando la transparencia y el brillo que tu hogar o negocio merece. Nos esforzamos por ser la opción confiable y preferida de nuestros clientes a través de la excelencia en cada trabajo que realizamos.
                    </p>
  
                   <h5 className="mb-5"><b> Valores Fundamentales</b></h5>
                   <p>
                   <p><b>Profesionalismo: </b>
                     Cada miembro de nuestro equipo está altamente capacitado y comprometido con el mejor resultado posible.</p>
                       <p><b>Confianza: </b>  Entendemos la importancia de la seguridad y la fiabilidad cuando se trata de trabajar en tu propiedad.</p>
                       <p><b>Calidad: </b>  Utilizamos productos de alta calidad y técnicas avanzadas para garantizar una limpieza superior.</p>
                       </p>
  
                  </p>
                    

                  </div>
                  
                     <div className="col-md-5">
                        <div className="img-animate">
                           <img src="https://lh3.googleusercontent.com/p/AF1QipN4B6xzsYSqBNhdAzqBDQG6PKC75W_enF03tRwg=s1360-w1360-h1020" 
                            alt="Imagen2"
                            width="638"
                            >

                           </img>
                           </div>
                     </div>
                     
            
                  </div>
        </div>
        </div>
    )
}
export default Quienessomos;
