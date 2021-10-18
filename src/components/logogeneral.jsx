import {Link} from 'react-router-dom';
import logo from '../media/LogoDuque.jpg';

function Logogeneral(){
    return(
        <li>
            <Link to='home'>
            <img src={logo} alt="logo" className="logo1" />
            </Link>
        </li>
    );
}

export default Logogeneral;