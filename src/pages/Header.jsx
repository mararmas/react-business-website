import { Link  } from "react-router-dom";
import Iconos from "./icono";
import './Header.css';
import IconoMail from "./IconoMail";

const Header = () =>{
    return(

        <div className="header-fijo">
           <div className="container-fluid p-20 ">
            
            
               <div className="row ">
               
                   <nav class="navbar navbar-expand-lg custom-bg">
                      <div class="container-fluid">
                        <Link to="/"><img src="/LogoGris.jpg" alt="Logo" width={180} /></Link>
                     </div>
                        <div className="col-md-5">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon "></span>
                            </button>
                                <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
                                            <div class="navbar-nav">
                                              
                                               <Link class="nav-link active " aria-current="page" to="/quienessomos">¿Quienes somos?</Link>
                                               
                                               <Link class="nav-link" to="/contacto">Contáctanos   <Iconos/></Link>
                                              
                                               <a className="nav-link" href="https://www.google.com/search?sca_esv=3e5381c58a31f6c2&sca_upv=1&hl=en&authuser=0&tbm=lcl&q=MSA+proprete+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDE1NDc3sDAyMDS0sLQwMTcyNNrAyPiKUcQ32FGhoCi_oCi1JFUhKLUsM7W8eBErVmEAXqiYt0kAAAA&rldimm=14517708201189847212&sa=X&ved=2ahUKEwjatpG45IWIAxUBSaQEHdKnM_4Q9fQKegQILBAF&biw=1536&bih=730&dpr=1.25#lkt=LocalPoiReviews"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                Ver opiniones   </a>
                                               
                                               </div>
                                            
                                               <div className="position-fixed  end-0 p-2"><IconoMail/> msa.proprete@gmail.com</div>
                                </div> 
                                
                                            
                     </div> 
                </nav>          
                                     
               
                </div>
            
             
        </div>
        </div>
       
    )
}
export default Header;