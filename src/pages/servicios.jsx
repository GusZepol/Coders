import logo from '../media/LogoDuque.jpg';
import Servicios from 'components/servi';
import serv1 from "../media/Desayuno servicio 1.jpg";
import serv2 from "../media/Almuerzo servicio 2.jpg";
import serv3 from "../media/Cena servicio 3.jpg";
import Home from './home';


function Serviciospag() {
    return (
<div className='bodyserv'>

<header>
    <ul className="navbar">
        <li>
            <button className="botongenerico mainboton">Volver</button>
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
            <Servicios servicio='ALMUERZOS' imagen={serv2} link={'home'} />
            </div>
            <div className='espacio'>
            <Servicios servicio='CENAS' imagen={serv3} link={'home'} />
            </div>
        </ul>
    </section>
</main>

<footer className="seccion">
     <div className="container">
        <div className="row">
            <div className="columna columna-25">
                <img src={logo} className="logo-footer"/>
                <p>Disfruta de deliciosos platos a la carta,<br/> con un toque de 
                     presentación,<br/> aroma, y una jugosa experiencia.</p>
            </div>
            <div className="columna columna-25">
                <h3>
                    Temas relacionados
                </h3>
                 <ul>
                    <li className="efecto">Iniciar Sesión</li>
                    <li className="efecto">Registrarse</li>
                </ul>
            </div>

            <div className="columna columna-25">
                <h3>
                    Datos de contacto
                </h3>
                <ul>
                    <li>https://github.com/GusZepol/Coders</li>
                    <li>+5755555555</li>
                    <li>Calle 11 D Sur #11A-11 - Barrio xxxxxx<br/>xxx-xxxx</li>
                </ul>
            </div>

            <div className="columna columna-25">
                <h3>
                    Redes sociales
                </h3>
                <div className="redes-container">
                <ul>
                    <li>
                        <a href="#" className="facebook">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="twitter">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="instagram">
                            <i className="fab fa-instagram-square"></i>
                        </a>
                    </li>
                </ul>
                </div>
            </div>
        </div>
    </div>
    <div className="barra-footer">
        &copy; DerechosReservados - 2021
    </div>
</footer>  

</div>
    );
  }
  
  export default Serviciospag;
  