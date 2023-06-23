import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/login'
import PageNotFound from './pages/page-not-found';
import BoatList from './pages/boat-list'
import BoatEdit from './pages/boat-edit';
import BoatsDetail from './pages/boat-detail';
import BoatAdd from './pages/boat-add';
import './App.css'
import SignIn from './pages/sign_in';
import PrivateRoute from './PrivateRoute';

const App: FunctionComponent = () => {

 return (
    <Router>
        <div>
            <Switch>
                <PrivateRoute exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route path="/signin" component={SignIn} />
                <PrivateRoute exact path="/boat" component={BoatList} />
                <PrivateRoute exact path='/boat/add' component={BoatAdd} />
                <PrivateRoute exact path={"/boat/edit/:id"} component={BoatEdit} />
                <PrivateRoute path='/boat/:id' component={BoatsDetail} />
                <Route component={PageNotFound} />
            </Switch>
        </div>
    </Router>
 )
}
  
export default App;



//// a voir faire formulaire signe in utilisateur 
//// finir le frontend
//// 