import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
  
const PageNotFound: FunctionComponent = () => {
  
  return (
    <div className="center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0DP59uOz44SZu_HkgTMCyVsq8tiSUXwJTxg&usqp=CAU" alt="Page non trouvée"/>
      <h1>Hey, cette page n'existe pas !</h1> 
      <Link to="/" className="waves-effect waves-teal btn-flat">
        Retourner à l'accueil
      </Link>
    </div>
  );
}
  
export default PageNotFound;