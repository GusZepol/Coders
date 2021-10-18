import logo from '../media/LogoDuque.jpg';
function Footerglobal(){
    return(
        <div  className="seccion">
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
                        <a href="#" className="facebook a1">
                            <i className="fab fa-facebook-square"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="twitter a1">
                            <i className="fab fa-twitter-square"></i>
                        </a>
                        </li>
                        <li>
                        <a href="#" className="instagram a1">
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

        </div>
    );
}

export default Footerglobal;