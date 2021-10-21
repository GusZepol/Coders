import './styles/stylehome.css';
import './styles/stylecreateaccount.css';
import './styles/styleAlmuerzo.css';
import './styles/styleservicios.css'
import './styles/styleTabla.css'
import Home from './pages/home';
import CreateAccount from './pages/createAccount';
import Almuerzo from './pages/Almuerzo';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Serviciospag from 'pages/servicios';
import Desayuno from 'pages/desayunos';
import Cena from 'pages/Cena';
import IngresarAdministrador from 'pages/ingresarAdministrador';
import IngresarVendedor from 'pages/ingresarvendedor';
import RegistroDeProductos from 'pages/registroDeProductos';
import Tabla from 'pages/Tabla';
import DummyPage1 from 'pages/dummypage1';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
            <Route path="/dummypage1">
                <DummyPage1 />
              </Route>
              <Route path="/Tabla">
                <Tabla />
              </Route>
              <Route path="/registroDeProductos">
                <RegistroDeProductos />
              </Route>
              <Route path="/ingresarvendedor">
                <IngresarVendedor />
              </Route>
              <Route path="/Cena">
                <Cena />
              </Route>
              <Route path="/desayunos">
                <Desayuno />
              </Route>
              <Route path="/Almuerzo">
                <Almuerzo />
              </Route>
              <Route path="/ingresarAdministrador">
                <IngresarAdministrador />
              </Route>
              <Route path="/createAccount">
                <CreateAccount />
              </Route>
              <Route path="/servicios">
                <Serviciospag />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
