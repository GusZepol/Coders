import './styles/stylehome.css';
import './styles/stylecreateaccount.css';
import './styles/styleAlmuerzo.css';
import './styles/styleservicios.css'
import Home from './pages/home';
import CreateAccount from './pages/createAccount';
import Almuerzo from './pages/Almuerzo';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Serviciospag from 'pages/servicios';
import Desayuno from 'pages/desayunos';
import Cena from 'pages/Cena';

import IngresarVendedor from 'pages/ingresarvendedor';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
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
