import {Link} from 'react-router-dom';

function Navglobal({nombre,clase,link}){
    return(
        <li>
            <Link to={link}>
            <button className={clase}>{nombre}</button>
            </Link>
        </li>
    );
}

export default Navglobal;