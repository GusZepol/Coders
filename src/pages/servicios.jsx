import logo from '../media/LogoDuque.jpg';
import Servicios from 'components/servi';
import serv1 from "../media/Desayuno servicio 1.jpg";
import serv2 from "../media/Almuerzo servicio 2.jpg";
import serv3 from "../media/Cena servicio 3.jpg";
import { Link } from 'react-router-dom';
import Footerglobal from 'components/footer';


function Serviciospag() {
    return (
<div className='bodyserv'>

<header>
    <ul className="navbar">
        <li>
            <Link to='home'>
            <button className="botongenerico mainboton">Volver</button>
            </Link>
        </li>
        <li>
            <img src={logo} alt="logo" className="logo" />
        </li>
        <li>
            <button className="botongenerico mainboton">Información</button>
        </li>
    </ul>
</header>


<main>
    <section>
        <h1 className="h1titu">Nuestros Productos</h1>
        <ul>
            <div className=''>
            <Servicios servicio='DESAYUNOS' imagen ={serv1} link={'home'} />
            </div>
            <div className=''>
            <Servicios servicio='ALMUERZOS' imagen={serv2} link={'Almuerzo'} />
            </div>
            <div className='espacio'>
            <Servicios servicio='CENAS' imagen={serv3} link={'home'} />
            </div>
        </ul>
    </section>
</main>

<footer>

<Footerglobal/>  

</footer>  

</div>
    );
  }
  
  export default Serviciospag;
  