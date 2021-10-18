import logo from '../media/LogoDuque.jpg';
import imgHamburguesa from '../media/hambur.jpg';
import imgPizza from '../media/pizza.jpg';
import imgEnsalada from '../media/ensalada.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Menucomidas from 'components/menucomidas';


function Almuerzo(){
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
        <h1 className="h1titudesa">MENU ALMUERZOS</h1>
        <section className="contenido">
            <Menucomidas servicio='HAMBURGUESA' precios='$15.000' imagen={imgHamburguesa} />
            <Menucomidas servicio='PIZZA' precios='$30.000' imagen={imgPizza} />
            <Menucomidas servicio='ENSALADA DE POLLO' precios='$12.000' imagen={imgEnsalada} />
            <Menucomidas servicio='CARNE' precios='$22.000' imagen={imgCarne} />
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Almuerzo;