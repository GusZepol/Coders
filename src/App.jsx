import AuthLayout from "Layouts/AuthLayout";
import PrivateLayout from 'Layouts/PrivateLayout';
import PublicLayout from 'Layouts/PublicLayout';
import Clientes from "pages/admin/Clientes";
import Admin from 'pages/admin/Index'
import Productos from "pages/admin/Productos";
import Index from 'pages/Index';
import Login from 'pages/Login';
import Registro from 'pages/Registro';
import { BrowserRouter as Router, Switch, Route, Link  } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>            
              <Switch>
                <Route path={['/Admin', '/Admin/Productos', '/Admin/Clientes']}> 
                  <PrivateLayout>
                    <Switch>
                      <Route path='/Admin/Productos'>
                        <Productos />
                      </Route>
                      <Route path='/Admin/Clientes'>
                        <Clientes />
                      </Route>
                      <Route path='/Admin'>
                        <Admin />
                      </Route>
                    </Switch>
                  </PrivateLayout>
                </Route>
                <Route path={['/Login', '/Registro']}>
                  <AuthLayout>
                    <Switch>
                      <Route path='/Login'>
                        <Login />
                      </Route>
                      <Route path='/Registro'>
                        <Registro />
                      </Route>
                    </Switch>
                  </AuthLayout>
                </Route>
                <Route path={['/']}>
                  <PublicLayout>
                    <Switch>
                      <Route path='/'>
                        <Index />
                      </Route>
                    </Switch>
                  </PublicLayout>
                </Route>
              </Switch>               
        </Router>
    </div>
  );
}

export default App;
