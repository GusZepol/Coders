import logo from '../media/LogoDuque.jpg';
import imgjugos from '../media/Galeriaimagen6.jpg';
import imgcaserola from '../media/Desayuno servicio 1.jpg';
import imghuevos from '../media/huevosdesayuno.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Menucomidas from 'components/menucomidas';


function Desayuno(){
    return(
<div className='bodyAlmuerzo'>
   <header>
        <ul className="navbar">
            <li>
                <Link to='servicios'>
                <button className="botongenerico mainboton">Volver</button>
                </Link>
            </li>
            <li>
                <img src={logo} alt="logo" className="logo"/>
            </li>
            <li>
                <button className="botongenerico mainboton">Información</button>
            </li>
            </ul>
    </header>
    <main>
        <h1 className="h1titudesa">MENU DESAYUNOS</h1>
        <section className="contenido">
            <Menucomidas servicio='JUGOS' precios='$5000' imagen= {imgjugos} />
            <Menucomidas servicio='OJALDRAS' precios='$7000' imagen= {imgcaserola} />
            <Menucomidas servicio='HUEVOS' precios='$10.000' imagen= {imghuevos} />
            <Menucomidas servicio='FILETE' precios='$15.000' imagen= {imgCarne} />
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Desayuno;