import {Link} from 'react-router-dom';

function Servicios({servicio,imagen,link}){
    return(
        <li>
            <h2 className="h2serv">{servicio}</h2>

            <Link to={link} >

                <div className="contenedorimgserv contenedorimgserv1">          
                <img src={imagen} alt={servicio}/>
                </div>
            
            </Link>   
        </li>
    );
}

export default Servicios;