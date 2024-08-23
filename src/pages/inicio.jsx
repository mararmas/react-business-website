import './Header.css';
import Presupuesto from "./formSolicitePresupuesto";
import Elegirnos from './PorqElegirnos';

const Inicio = () => {
    return (
      <div>
      <div class="container-fluid">
        <div className= "row">

           <div className= "col-md-8 p-0" style={{marginTop: "-100px"}}> 
              <div className="img-animate">

                         <img src="https://lh3.googleusercontent.com/p/AF1QipP7hVp2juy59nRU9OfHWyywO2itOjA7-mtNOhBV=s1360-w1360-h1020"
                          alt="imagen" 
                           width="1550"/>
                  </div>

                  </div>

                  
                <Presupuesto/>
                     
    
    
        
             </div>  

    
              <div className="linea-blanca"></div>

                 <div class="container-fluid p-5 min-vh-100 ">
                    <div className="row">
                     <div class="p-5  text-left"><p style={{fontSize:"50px"}}>Limpieza de paneles solares
                               <p style={{fontSize:"22px"}}>Mantener tus paneles solares limpios es crucial para asegurar
                               su máximo rendimiento y eficiencia</p></p></div>

     

    
                 <div className= "col-md-8-flex" style={{position:"relative",
                           marginTop: "20px" }}> 
    
    

                               <img src="https://optima-solar.com/wp-content/uploads/2018/02/foto-3.jpg" 
                                      alt="imagen" width="700"
                                               style={{
                                                        position:"absolute",
                                                        left:"350px",
                                                         top:"0",
                                                         maxWidth:"100%"
                                                         }}/>
            
                           </div>

                                       <div className="container col-md-10 mb-0 p-0"
                                          style={{position:"relative",
                                           marginTop: "10px" }}>
                                     <div className="row">
              
                                          <div 
                                                     style={{                     
                       
                                                             position:"absolute",
                                                              left:"-90px",
                                                             top:"0",
                                                             maxWidth:"150%"}}>
            
                 <div className="row justify-content-left">
                    <div className="col-md-3">                 
                                                 
                      
                              <div className="mb-1" style={{fontSize:"19px"}}>
                                 <p > Nos especializamos en la
                                   limpieza de paneles solares utilizando un sistema de agua pura, garantizando una eliminación eficaz
                                     de la suciedad sin dejar residuos.</p><p>Mantener tus paneles solares limpios es crucial para asegurar
                                      su máximo rendimiento y eficiencia, ya que la acumulación de polvo y suciedad puede reducir 
                                      significativamente la cantidad de luz solar que capturan, afectando su capacidad para generar 
                                          energía de manera óptima.</p>
                     
                              </div>
               
                
              
                            </div>
                         </div>
                        </div>
                       </div>
                     </div>
                  </div>
     
            
               </div>
            </div>

            
          <Elegirnos/>
           

        </div>      
        
    )
}
export default Inicio;