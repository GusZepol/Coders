import logo from '../media/LogoDuque.jpg';
import imgHamburguesa from '../media/hambur.jpg';
import imgPizza from '../media/pizza.jpg';
import imgEnsalada from '../media/ensalada.jpg';
import imgCarne from '../media/carne.jpg';
import {Link} from 'react-router-dom';



function Almuerzo(){
    return(
<div>
   <header>
        <ul class="navbar">
            <li>
                <Link to='home'>
                <button class="botongenerico mainboton">Volver</button>
                </Link>
            </li>
            <li>
                <img src={logo} alt="logo" class="logo"/>
            </li>
            <li>
                <button class="botongenerico mainboton">Información</button>
            </li>
            </ul>
    </header>
    <main>
        <h1 class="h1titu">MENU ALMUERZOS</h1>
        <section class="contenido">
            <div class="columnamenu">
                <h2>HAMBURGUESA</h2>
                <p class="precio">$15.000</p>
                <img src={imgHamburguesa} alt="HAMBURGUESA" class="imagenmenu"  width="200" height="200"/>
                <input class="boton" type="submit" value="COMPRAR"/>
            </div>
            <div class="columnamenu">
                <h2>PIZZA</h2>
                <p class="precio">$30.000</p>
                <img src={imgPizza} alt="pizza" class="imagenmenu"  width="200" height="200"/>
                <input class="boton" type="submit" value="COMPRAR"/>
            </div>
            <div class="columnamenu">
                <h2>ENSALADA DE POLLO</h2>
                <p class="precio">$12.000</p>
                <img src={imgEnsalada} alt="ensalada" class="imagenmenu"  width="200" height="170"/>
                <input class="boton" type="submit" value="COMPRAR"/>
            </div>
            <div class="columnamenu">
                <h2>CARNE</h2>
                <p class="precio">$22.000</p>
                <img src={imgCarne} alt="carne" class="imagenmenu" width="200" height="200"/>
                <input class="boton" type="submit" value="COMPRAR"/>
            </div>
        </section>
    
    </main>
    <footer class="seccion">
        <div class="container">
            <div class="row">
                <div class="columna columna-25">
                    <img src={logo} class="logo-footer"/>
                    <p>Disfruta de deliciosos platos a la carta,<br/> con un toque de
                        presentación,<br/> aroma, y una jugosa experiencia.</p>
                </div>
    
                <div class="columna columna-25">
                    <h3>
                        Temas relacionados
                    </h3>
                    <ul>
                        <li class="efecto">Iniciar Sesión</li>
                        <li class="efecto">Nuestra Carta</li>
                    </ul>
                </div>
    
                <div class="columna columna-25">
                    <h3>
                        Datos de contacto
                    </h3>
                    <ul>
                        <li>https://github.com/GusZepol/Coders</li>
                        <li>+5755555555</li>
                        <li>Calle 11 D Sur #11A-11 - Barrio xxxxxx<br/>xxx-xxxx</li>
                    </ul>
                </div>
    
                <div class="columna columna-25">
                    <h3>
                        Redes sociales
                    </h3>
                    <div class="redes-container">
                        <ul>
                            <li>
                                <a href="#" class="facebook">
                                    <i class="fab fa-facebook-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="twitter">
                                    <i class="fab fa-twitter-square"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="instagram">
                                    <i class="fab fa-instagram-square"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="barra-footer">
            &copy; DerechosReservados - 2021
        </div>
    </footer>


    </div>
    );
}
export default Almuerzo;