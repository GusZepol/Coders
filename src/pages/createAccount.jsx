import logo from '../media/LogoDuque.jpg';
import {Link} from 'react-router-dom';
function CreateAccount(){
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
            <img src={logo} alt="logo" class="logo" />
        </li>
        <li>
            <button class="botongenerico mainboton">Información</button>
        </li>
        </ul>
    </header>
    <main>
    <section class="crearcuenta">
        <h4>CREAR UNA CUENTA</h4>
        <form>
        <label class="nombre" for="correo">Correo electronico</label>
        <input class="cajas" type="text" name="correo" placeholder="Correo electronico"/>
        <label class="nombre" for="nombre">Nombre</label>
        <input class="cajas" type="text" name="nombre" placeholder="Nombre"/>
        <label class="nombre" for="apellido">Apellido</label>
        <input class="cajas" type="text" name="apellido" placeholder="Apellido"/>
        <label class="nombre" for="ciudad">Ciudad</label>
        <input class="cajas" type="text" name="ciudad" placeholder="Ciudad"/>
        <label class="nombre" for="barrio">Barrio</label>
        <input class="cajas" type="text" name="barrio" placeholder="Barrio"/>
        <label class="nombre" for="contraseña">Contraseña</label>
        <input class="cajas" type="password" name="contraseña" placeholder="Contraseña"/>
        <label class="nombre" for="confirmarContr">Confirmar Contraseña</label>
        <input class="cajas" type="password" name="confirmarContr" placeholder="Confirmar contraseña"/>
        <div class="check0">
        <label class="nombre" for="ver">Ver contraseña</label>
        <input class="check1" type="checkbox" name="ver"/>
        </div>
        <label class="nombre" for="numeromovil">Telefono Celular</label>
        <input class="cajas" type="number" name="numeromovil" placeholder="Telefono Celular"/>
        <button class="boton" type="submit">Crear Cuenta</button>
        </form>
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
export default CreateAccount;