import logo from '../media/LogoDuque.jpg';
import imgCenaSushi from '../media/CenaSushi.jpg';
import imgCenaCamarones from '../media/CenaCamarones.jpg';
import imgCenaPasta from '../media/CenaPasta.jpg';
import imgCenaCostillasBBQ from '../media/CenaCostillasBBQ.jpg';
import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Menucomidas from 'components/menucomidas';


function Cena(){
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
        <h1 className="h1titudesa">MENU CENA</h1>
        <section className="contenido">
            <Menucomidas servicio='SUSHI' precios='$28000' imagen= {imgCenaSushi} />
            <Menucomidas servicio='PASTA' precios='$20000' imagen= {imgCenaCamarones} />
            <Menucomidas servicio='CAMARONES' precios='$32000' imagen= {imgCenaPasta} />
            <Menucomidas servicio='COSTILLAS BBQ' precios='$27000' imagen= {imgCenaCostillasBBQ} />
        </section>
    
    </main>
    
    <footer>

             <Footerglobal/>  

    </footer> 

    </div>
    );
}
export default Cena;