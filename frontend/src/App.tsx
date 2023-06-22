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
const App: FunctionComponent = () => {

 return (
    <Router>
        <div>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/login' component={Login} />
                <Route path="/signin" component={SignIn} />
                <Route exact path="/boat" component={BoatList} />
                <Route exact path='/boat/add' component={BoatAdd} />
                <Route exact path={"/boat/edit/:id"} component={BoatEdit} />
                <Route path='/boat/:id' component={BoatsDetail} />
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