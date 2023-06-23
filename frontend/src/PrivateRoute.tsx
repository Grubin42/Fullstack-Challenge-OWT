import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthenticationService from './services/authentication-service';
  
const PrivateRoute = ({ component: Component, ...rest }: any) => (
  <Route {...rest} render={(props) => {
    const isAuthenticated = AuthenticationService.isAuthenticated;
    const hasToken = localStorage.getItem('token');
    if (!isAuthenticated && !hasToken) {    
      return <Redirect to={{ pathname: '/login' }} />
    }
  
    return <Component {...props} />
  }} />
);
  
export default PrivateRoute;