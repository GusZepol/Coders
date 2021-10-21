import {Link} from 'react-router-dom';
import Footerglobal from 'components/footer';
import Navglobal from 'components/navGlobal';
import Logogeneral from 'components/logogeneral';

function DummyPage1(){
    return(

<div>
<header>
    <ul className="navbar">
        <Navglobal nombre='Volver' clase={'botongenerico mainboton'} link={'home'}/>
        
        <Logogeneral/>

        <Navglobal nombre='Información' clase={'botongenerico mainboton'} link={'home'}/>
    </ul>
</header>


 <br/>
 <br/>   
 <br/>   
 <br/>      

<footer>
<Footerglobal/>  
</footer> 

</div>
    );
}
export default DummyPage1;