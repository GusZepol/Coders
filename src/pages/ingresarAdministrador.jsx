import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';

function IngresarAdministrador(){
    return(

<div>
<header>
    <ul className="navbar">

        <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'home'}/>
        
        <Logogeneral/>

        <Navglobal nombre='NOSOTROS' clase={'botongenerico mainboton'} link={'home'}/>

    </ul>
</header>
    <main className='bodyCreat'>
    <section className="crearcuenta">
        <h4>Ingresar como Administrador</h4>
        <form>
        <label className="nombre" for="correo">Correo electronico</label>
        <input className="cajas" type="text" name="correo" placeholder="Correo electronico"/>
        <label className="nombre" for="contraseña">Contraseña</label>
        <input className="cajas" type="password" name="contraseña" placeholder="Contraseña"/>        
        <div className="check0">
        <label className="nombre" for="ver">Ver contraseña</label>
        <input className="check1" type="checkbox" name="ver"/>
        </div>
        <button className="boton" type="submit">Ingresar</button>
        </form>
    </section>
    </main>

<footer>

<Footerglobal/>  

</footer> 

        </div>
    );
}
export default IngresarAdministrador;