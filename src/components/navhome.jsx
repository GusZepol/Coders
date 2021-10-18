import {Link} from 'react-router-dom';

function Navhome({nombre,clase,link,claselink}){
    return(
        <li>
            <Link to={link} className={claselink}>
            <p className={clase}> {nombre} </p>
            </Link>
        </li>
    );
}

export default Navhome;