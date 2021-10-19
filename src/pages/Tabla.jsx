import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';
function Tabla(){
    return(

<div>
<header>
    <ul className="navbar">

        <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'home'}/>
        
        <Logogeneral/>

        <Navglobal nombre='Información' clase={'botongenerico mainboton'} link={'home'}/>

    </ul>
</header>

<div class="tabla">
        <table>
            <caption class="titulo">INFORMACIÓN DE LOS USUARIOS</caption>
            <thead>
                <tr>
                    <th>NOMBRES</th><th>APELLIDOS</th><th>CIUDAD</th><th>BARRIO</th><th>METODO DE PAGO</th><th>CORREO ELECTRONICO</th><th>CONTRASEÑA</th>
                </tr>
            </thead>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
            <tr>
                <td>sofia</td><td>rojas</td><td>bogota</td><td>villas de granada</td><td>tarjeta de credito</td><td>prinsdkfsd@gmail.com</td><td>contrA123ÄA</td>
            </tr>
        </table>
    </div>
   

<footer>

<Footerglobal/>  

</footer> 

        </div>
    );
}
export default Tabla;