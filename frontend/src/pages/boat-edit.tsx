import React, { FunctionComponent, useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BoatForm from '../components/boat-form';
import Boat from '../models/boat';
import BoatService from '../services/boat-service';
 
type Params = { id: string };
  
const BoatEdit: FunctionComponent<RouteComponentProps<Params>> = ({ match }) => {
    
  const [boat, setBoat] = useState<Boat|null>(null);
  
  useEffect(() => {
    BoatService.getBoat(+match.params.id).then(boat => setBoat(boat));
  }, [match.params.id]);
    
  return (
    <div>
      { boat ? (
        <div className="row">
            <h2 className="header center">Éditer { boat.name }</h2>
            <BoatForm boat={boat} isEditForm={true}></BoatForm>
        </div>
      ) : (
        <h4 className="center">Aucun bateau à afficher !</h4>
      )}
    </div>
  );
}
  
export default BoatEdit;