import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Login from './pages/login'
import PageNotFound from './pages/page-not-found';
import BoatList from './pages/boat-list'
const App: FunctionComponent = () => {

 return (
    <Router>
        <div>
            { /* la barre de nav commun a toutes les pages*/}
            <nav>
                <div className='nav-wrapper teal'>
                    <Link to="/" className='brand-logo center'>PEDALO</Link>
                </div>
            </nav>
            { /* le systeme de gestion des routes de l'applications*/}
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path="/boat" component={BoatList} />

                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
 )
}
  
export default App;