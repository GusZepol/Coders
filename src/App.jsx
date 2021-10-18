import './styles/stylehome.css';
import './styles/stylecreateaccount.css';
import './styles/styleAlmuerzo.css';
import Home from './pages/home';
import CreateAccount from './pages/createAccount';
import Almuerzo from './pages/Almuerzo';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";


function App() {
  return (
    <div className="App">

        <Router>
            <Switch>
              <Route path="/Almuerzo">
                <Almuerzo />
              </Route>
              <Route path="/createAccount">
                <CreateAccount />
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
