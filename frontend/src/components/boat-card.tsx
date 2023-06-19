import React, { FunctionComponent, useState } from 'react';
import Boat from '../models/boat';
import { useHistory } from 'react-router-dom';

type Props = {
  boat: Boat,
  borderColor?: string
};
  
const BoatCard: FunctionComponent<Props> = ({boat, borderColor = '#009688'}) => {

    const [color, setColor] = useState<string>();
    const history = useHistory();

    const showBorder = () => {
        setColor(borderColor);
    }

    const hideBorder = () => {
        setColor('#f5f5f5');
    }

    const goToAvatar = (id: number) => {
        history.push(`/avatar/${id}`);
    }

    return (
        <div className="col s6 m4" onClick={() => goToAvatar(boat.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
        <div className="card horizontal" style={{borderColor: color}}>
            <div className="card-image"> 
            <img src={boat.picture} alt={boat.name}/>
            </div>
            <div className="card-stacked">
            <div className="card-content">
                <p>{boat.name}</p>
            </div>
            </div>
        </div> 
        </div>
  );
}
  
export default BoatCard;