import logo from '../media/LogoDuque.jpg';
import imgHamburguesa from '../media/hambur.jpg';
import imgPizza from '../media/pizza.jpg';
import imgEnsalada from '../media/ensalada.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Menucomidas from 'components/menucomidas';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';


function Almuerzo(){
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
        <h1 className="h1titudesa">MENU ALMUERZOS</h1>
        <section className="contenido">
            <Menucomidas servicio='HAMBURGUESA' precios='$15000' imagen={imgHamburguesa} />
            <Menucomidas servicio='PIZZA' precios='$30000' imagen={imgPizza} />
            <Menucomidas servicio='ENSALADA DE POLLO' precios='$12000' imagen={imgEnsalada} />
            <Menucomidas servicio='CARNE' precios='$22000' imagen={imgCarne} />
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Almuerzo;