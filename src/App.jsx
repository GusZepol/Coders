import logo from './media/LogoDuque.jpg';
import comidafinicio from './media/Comidafondoinicio.jpg';
import img1 from './media/Galeriaimagen1.jpg';
import img2 from './media/Galeriaimagen21.jpg';
import img3 from './media/Galeriaimagen3.jpg';
import img4 from './media/Galeriaimagen4.jpg';
import img5 from './media/Galeriaimagen5.jpg';
import img6 from './media/Galeriaimagen6.jpg';

import './styles/App.css';

function App() {
  return (
    <div className="App">
      <header>
            <div className="container">
                <a href="index.html">   
                    <img src={logo} className="logo" />
                </a>
                <nav>
                    <a href="#Inicio">Inicio</a>
                    <a href="#nosotros">Nosotros</a>
                    <a href="#servicios">Servicios</a>
                    <a href="#galeria">Galería</a>
                    <a href="#contactenos">Contáctenos</a>
                </nav>
                <a href="#" className="hamb"><i><i className="fas fa-bars"></i></i></a>
            </div>
        </header>
        <main>
            <section id="inicio">
                <img src={comidafinicio} />
                <div className="bloque-inicio">
                    <h1>!Bienvenidos a Sensazione¡</h1>
                    <p>
                    Disfruta de deliciosos platos a la carta, con un toque de 
                    presentación, aroma, experiencia y una jugosa experiencia.
                    </p>
                    <a href="#nosotros" className="boton boton-rojo">Ver más</a>
                </div>
            </section> 
            <section id="nosotros" className="seccion">
                <div className="container">
                    <p>¡Con más de 20 años de experiencia en los múltiples ámbitos de la 
                        cocina!
                    </p>
                </div>
            </section>
            
            <section id="galeria">
                <div className="container-fluid">
                    <div className="row">
                        <div className="columna-33 columna-mobile-50">
                           <div className="cuadrado-perfecto">
                               <img src={img1} />
                               <h4>Carnes</h4>
                           </div> 
                        </div>
                        <div className="columna-33 columna-mobile-50">
                            <div className="cuadrado-perfecto">
                               <img src={img2} />
                               <h4>Pollo</h4>
                            </div>
                        </div>
                        <div className="columna-33 columna-mobile-50">
                            <div className="cuadrado-perfecto">
                               <img src= {img3} />
                               <h4>Pescado</h4>
                           </div>
                        </div>

                        <div className="columna-33 columna-mobile-50">
                            <div className="cuadrado-perfecto">
                               <img src= {img4}/>
                               <h4>Comidas Rápidas</h4>
                           </div>
                        </div>

                        <div className="columna-33 columna-mobile-50">
                            <div className="cuadrado-perfecto">
                               <img src= {img5} />
                               <h4>Sushi</h4>
                           </div>
                        </div>

                        <div className="columna-33 columna-mobile-50">
                            <div className="cuadrado-perfecto">
                               <img src= {img6} />
                               <h4>Jugos</h4>
                           </div> 
                        </div>
                    </div>
                </div>
            </section> 
            <section id="contactenos" className="seccion">
                <iframe width="520" height="400" frameborder="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Medell%C3%ADn+(Colombia)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                <div className="container-fluid">
                    <div className="row">
                        <div className="columna columna-41 columna-mobile-100 empujar-58 empujar-mobile-0 sinpadding-mobile">
                            <form action="" method="post">
                                <div className="form-block">
                                    <input type="text" name="nombre" className= "form-control placeholder=Nombre"/>
                                </div>

                                <div className="form-block">
                                    <input type="email" name="email" className= "form-control placeholder=Email"/>
                                </div>
                                <div className="form-block">
                                    <textarea name="mensaje" placeholder="Mensaje"></textarea>
                                </div>
                                <div className="form-block bloque-ultimo">
                                    <input type="submit" className="boton boton-negro" value="Enviar"/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
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
                        <ul className="redes-container">
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
            <div className="barra-footer">
                &copy; DerechosReservados - 2021
            </div>
        </footer>
    </div>
  );
}

export default App;
