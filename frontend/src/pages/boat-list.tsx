import React, { FunctionComponent, useState, useEffect } from 'react';
import Boat from '../models/boat';
import BoatCard from '../components/boat-card';
import BoatService from '../services/boat-service';

const BoatList: FunctionComponent = () => {
const [boats, setboats] = useState<Boat[]>([]);
  
  useEffect(() => {
    BoatService.getBoats().then(boats => setboats(boats));
  }, []);
  
  return (
    <div>
      <h1 className="center">WAAAAA LES BEAUX BATEAU</h1>
      <div className="container"> 
        <div className="row"> 
        {boats.map(boats => (
          <BoatCard key={boats.id} boat={boats} />
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default BoatList;