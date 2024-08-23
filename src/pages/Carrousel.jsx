const carusel=()=>{

 return (

<div id="carouselExampleCaptions" class="carousel slide p-5" >
      <div class="carousel-indicators">
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
             <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

      <div class="carousel-inner">
        <div class="carousel-item active">
            

            <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" 
                  width="100%"
                  height="400"
                  xmlns="http://www.w3.org/2000/svg" 
                  role="img"
                  aria-label="Placeholder: First slide" 
                  preserveAspectRatio="xMidYMid slice" 
                 focusable="false"
                 >
          
                  <title>Placeholder</title>
            
                  <title>Placeholder</title>
                     <rect width="100%" height="100%"  fill="#caab51"></rect>
                     <image href="https://www.monumental.co.cr/wp-content/uploads/2022/01/KANTAR.jpg" width="100%" height="100%" />
                      <text x="50%" y="50%" fill="#555" dy=".3em"></text>
            </svg>

             <div class="carousel-caption d-none d-md-block ">
                   <h5 style={{fontSize:"35px",color:"gold"}}>Economía</h5>
                         <p style={{fontSize:"20px"}}>La eficiencia de nuestro personal, 
                              directamente formado por nosotros, nos permite ofrecer los precios más
                              competitivos del mercado junto con una excelente calidad.
                         </p>
                </div>
             </div>



        <div class="carousel-item">
           <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" width="800" height="400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Second slide" preserveAspectRatio="xMidYMid slice" focusable="false">
               <title>Placeholder</title>
               <rect width="100%" height="100%" fill="#7d9364"></rect>
               <image href="https://greensmart.green/wp-content/uploads/2022/03/ense%C3%B1emos-de-forma-ludica-a-los-pequenos-del-hogar-el-cuidado-del-medio-ambiente-y-conviertete-en-un-salvador-del-planeta-1.jpg" width="100%" height="100%" />
               <text x="50%" y="50%" fill="#444" dy=".3em"></text>

            </svg>


          <div class="carousel-caption d-none d-md-block custom-caption">
                 <h5 style={{fontSize:"35px", color:"#555"}}>Medioambiente</h5>
                  <p style={{fontSize:"20px"}}>Utilizamos exclusivamente productos naturales y 
                    ecológicos que no dañan el medioambiente ni afectan la calidad del aire en tu hogar o negocio.
                 Con nosotros, puedes disfrutar de ventanas impecables sin comprometer el bienestar del planeta.
                 </p>
          </div>
        </div>


        <div class="carousel-item">
                <svg class="bd-placeholder-img bd-placeholder-img-lg d-block w-100" 
                  width="800" height="400" 
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: Third slide" 
                  preserveAspectRatio="xMidYMid slice" 
                  focusable="false">

          <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#739aa2"></rect>
               <image href="https://limpiezasalfil.com/wp-content/uploads/2018/10/limpiar-cristales-en-altura-con-p%C3%A9rtiga-e1540375213971.jpg" width="100%" height="100%" />
               <text x="50%" y="50%" fill="#333" dy=".3em"></text>
               </svg>


               <div class="carousel-caption d-none d-md-block">
                  <h5 style={{fontSize:"35px"}}>Seguridad</h5>
                    <p style={{fontSize:"20px"}}>Cumplimos estrictamente con la legislación en materia de
                 seguridad laboral y todas nuestras intervenciones están cubiertas
                  por un seguro de responsabilidad civil.</p>
          </div>
        </div>
      </div>


      <button class="carousel-control-prev custom-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next custom-control" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
        )

    }

    export default carusel;