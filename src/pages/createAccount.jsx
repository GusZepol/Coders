import logo from '../media/LogoDuque.jpg';
import {Link} from 'react-router-dom';
function CreateAccount(){
    return(
        <div>

<header>
    <ul className="navbar">
        <li>
            <Link to='home'>
            <button className="botongenerico mainboton">Volver</button>
            </Link>
        </li>
        <li>
            <img src={logo} alt="logo" className="logo1" />
        </li>
        <li>
            <button className="botongenerico mainboton">Información</button>
        </li>
        </ul>
    </header>
    <main className='bodyCreat'>
    <section className="crearcuenta">
        <h4>CREAR UNA CUENTA</h4>
        <form>
        <label className="nombre" for="correo">Correo electronico</label>
        <input className="cajas" type="text" name="correo" placeholder="Correo electronico"/>
        <label className="nombre" for="nombre">Nombre</label>
        <input className="cajas" type="text" name="nombre" placeholder="Nombre"/>
        <label className="nombre" for="apellido">Apellido</label>
        <input className="cajas" type="text" name="apellido" placeholder="Apellido"/>
        <label className="nombre" for="ciudad">Ciudad</label>
        <input className="cajas" type="text" name="ciudad" placeholder="Ciudad"/>
        <label className="nombre" for="barrio">Barrio</label>
        <input className="cajas" type="text" name="barrio" placeholder="Barrio"/>
        <label className="nombre" for="contraseña">Contraseña</label>
        <input className="cajas" type="password" name="contraseña" placeholder="Contraseña"/>
        <label className="nombre" for="confirmarContr">Confirmar Contraseña</label>
        <input className="cajas" type="password" name="confirmarContr" placeholder="Confirmar contraseña"/>
        <div className="check0">
        <label className="nombre" for="ver">Ver contraseña</label>
        <input className="check1" type="checkbox" name="ver"/>
        </div>
        <label className="nombre" for="numeromovil">Telefono Celular</label>
        <input className="cajas" type="number" name="numeromovil" placeholder="Telefono Celular"/>
        <button className="boton" type="submit">Crear Cuenta</button>
        </form>
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
                        <li className="efecto">Nuestra Carta</li>
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
export default CreateAccount;