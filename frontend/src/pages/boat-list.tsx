import React, { FunctionComponent, useState, useEffect } from 'react';
import Boat from '../models/boat';
import BoatCard from '../components/boat-card';
import BoatService from '../services/boat-service';
import { Link } from 'react-router-dom';

const BoatList: FunctionComponent = () => {
const [boats, setboats] = useState<Boat[]>([]);
  
  useEffect(() => {
    BoatService.getBoats().then(boats => setboats(boats));
  }, []);
  
  return (
    <div>
      <h1 className="center">PEDALO</h1>
      <div className="container"> 
        <div className="row"> 
        {boats.map(boats => (
          <BoatCard key={boats.id} boat={boats} />
        ))}
        </div>
        <Link className='btn-floating btn-large waves-effect waves-light red z-depth-3'
          style={{position: 'fixed', bottom: '25px', right: '25px'}}
          to='/boat/add'>
          <i className='material-icons'>add</i>
        </Link>
      </div>
    </div> 
  );
}
  
export default BoatList;