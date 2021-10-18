import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';
function CreateAccount(){
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

<footer>

<Footerglobal/>  

</footer> 

        </div>
    );
}
export default CreateAccount;