import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';
function RegistroDeProductos(){
    return(

<div>
<header>
    <ul className="navbar">

        <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'home'}/>
        
        <Logogeneral/>

        <Navglobal nombre='Información' clase={'botongenerico mainboton'} link={'home'}/>

    </ul>
</header>
    <main className='bodyCreat'>
    <section className="crearcuenta">
        <h4>Registrar Producto</h4>
        <form>
        <label class="nombre" for="nombre">Nombre Producto</label>
        <input class="cajas" type="text" name="nombre" placeholder="Nombre Producto"/>
        <label class="nombre" for="codigo">Codigo</label>
        <input class="cajas" type="text" name="codigo" placeholder="Codigo"/>
        <label class="nombre" for="precio venta">Precio Venta</label>
        <input class="cajas" type="text" name="precio venta" placeholder="Precio Venta"/>
        <label class="nombre" for="descripcion">Descripción</label>
        <input class="cajas" type="text" name="descripcion" placeholder="Descripción"/>
        <label class="nombre" for="foto producto">foto Producto</label>
        <input class="cajas" type="file" name="foto producto" placeholder="Subir Foto"/>
        <button class="boton" type="submit">Registrar Producto</button>
        </form>
      
    </section>
    </main>

<footer>

<Footerglobal/>  

</footer> 

        </div>
    );
}
export default RegistroDeProductos;