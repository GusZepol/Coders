import logo from '../media/LogoDuque.jpg';
import imgHamburguesa from '../media/hambur.jpg';
import imgPizza from '../media/pizza.jpg';
import imgEnsalada from '../media/ensalada.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';


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
        <h1 className="h1titu">MENU ALMUERZOS</h1>
        <section className="contenido">
            <div className="columnamenu">
                <h2>HAMBURGUESA</h2>
                <p className="precio">$15.000</p>
                <img src={imgHamburguesa} alt="HAMBURGUESA" className="imagenmenu"  width="200" height="200"/>
                <input className="boton" type="submit" value="COMPRAR"/>
            </div>
            <div className="columnamenu">
                <h2>PIZZA</h2>
                <p className="precio">$30.000</p>
                <img src={imgPizza} alt="pizza" className="imagenmenu"  width="200" height="200"/>
                <input className="boton" type="submit" value="COMPRAR"/>
            </div>
            <div className="columnamenu">
                <h2>ENSALADA DE POLLO</h2>
                <p className="precio">$12.000</p>
                <img src={imgEnsalada} alt="ensalada" className="imagenmenu"  width="200" height="200"/>
                <input className="boton" type="submit" value="COMPRAR"/>
            </div>
            <div className="columnamenu">
                <h2>CARNE</h2>
                <p className="precio">$22.000</p>
                <img src={imgCarne} alt="carne" className="imagenmenu" width="200" height="200"/>
                <input className="boton" type="submit" value="COMPRAR"/>
            </div>
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Almuerzo;