import logo from '../media/LogoDuque.jpg';
import Servicios from 'components/servi';
import serv1 from "../media/Desayuno servicio 1.jpg";
import serv2 from "../media/Almuerzo servicio 2.jpg";
import serv3 from "../media/Cena servicio 3.jpg";
import { Link } from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';


function Serviciospag() {
    return (
<div className='bodyserv'>

<header>
    <ul className="navbar">

    <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'home'}/>
        
    <Logogeneral/>

    <Navglobal nombre='Información' clase={'botongenerico mainboton'} link={'home'}/>
    
    </ul>
</header>


<main>
    <section>
        <h1 className="h1titu">Nuestros Productos</h1>
        <ul>
            <div className=''>
            <Servicios servicio='DESAYUNOS' imagen ={serv1} link={'desayunos'} />
            </div>
            <div className=''>
            <Servicios servicio='ALMUERZOS' imagen={serv2} link={'Almuerzo'} />
            </div>
            <div className=''>
            <Servicios servicio='CENAS' imagen={serv3} link={'Cena'} />
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
  