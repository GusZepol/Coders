import './styles/stylehome.css';
import './styles/stylecreateaccount.css';
import './styles/styleservicios.css'
import Home from './pages/home';
import CreateAccount from './pages/createAccount';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";
import Serviciospag from 'pages/servicios';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
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
