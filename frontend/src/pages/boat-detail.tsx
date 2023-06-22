import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
import Boat from '../models/boat';
import BoatService from '../services/boat-service';
  
type Params = { id: string }; // identifiant sous form de chaine de charactere par le routeur de react
  
const BoatsDetail: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => { //typage parm recu par le routeur
    
  const [boat, setBoat] = useState<Boat|null>(null); //defini un state pour sauvegarder l'avatar a afficher
  
  useEffect(() => {
    BoatService.getBoat(+match.params.id).then(response => setBoat(response.data));
  }, [match.params.id]);
  
  console.log('egal======', boat)
  return (
    <div>
      { boat ? ( //defini un operateur ternaire
        <div className="row">
          <div className="col s12 m8 offset-m2"> 
            <h2 className="header center">{ boat.name }</h2>
            <div className="card hoverable"> 
              <div className="card-image">
                <img src={boat.picture} alt={boat.name} style={{width: '250px', margin: '0 auto'}}/>
                <Link to={`/boat/edit/${boat.id}`} className='btn btn-floating halfway-fab waves-effect waves-light'>
                  <i className='material-icons'>edit</i>
                </Link>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <table className="bordered striped">
                    <tbody>
                      <tr> 
                        <td>Nom</td> 
                        <td><strong>{ boat.name }</strong></td> 
                      </tr>
                      <tr> 
                        <td>description</td> 
                        <td><strong>{ boat.description }</strong></td> 
                      </tr> 
                    </tbody>
                  </table>
                </div> 
                <div className="card-action"> 
                  <Link to="/boat">Retour</Link> 
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : ( // si pas d avatar
        <h4 className="center">Aucun bateau à afficher !</h4>
      )}
    </div>
  );
}
  
export default BoatsDetail;