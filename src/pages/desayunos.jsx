import logo from '../media/LogoDuque.jpg';
import imgjugos from '../media/Galeriaimagen6.jpg';
import imgcaserola from '../media/Desayuno servicio 1.jpg';
import imghuevos from '../media/huevosdesayuno.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Menucomidas from 'components/menucomidas';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';


function Desayuno(){
    return(
<div className='bodyAlmuerzo'>
   <header>

        <ul className="navbar">
        <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'servicios'}/>
        
        <Logogeneral/>

        <Navglobal nombre='Información' clase={'botongenerico mainboton'} link={'home'}/>
        </ul>

    </header>
    <main>
        <h1 className="h1titudesa">MENU DESAYUNOS</h1>
        <section className="contenido">
            <Menucomidas servicio='JUGOS' precios='$5000' imagen= {imgjugos} />
            <Menucomidas servicio='OJALDRAS' precios='$7000' imagen= {imgcaserola} />
            <Menucomidas servicio='HUEVOS' precios='$10000' imagen= {imghuevos} />
            <Menucomidas servicio='FILETE' precios='$15000' imagen= {imgCarne} />
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Desayuno;