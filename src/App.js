import { BrowserRouter,Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Header from "./pages/Header";
import Quienessomos from "./pages/Quienessomos";
import Footer from "./pages/Footer";
import Inicio from "./pages/inicio";
import Contacto from "./pages/Contacto";


function App() {
  return (
    <div className= "text-muted  vh-100">
      < BrowserRouter>

      <Header />
      <Routes>
        <Route path="/" element= {<Inicio/>}/>
        <Route path="/contacto" element= {<Contacto/>}/>
        <Route path="/quienessomos" element= {<Quienessomos/>}/>
          

      </Routes>

      <Footer/>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
