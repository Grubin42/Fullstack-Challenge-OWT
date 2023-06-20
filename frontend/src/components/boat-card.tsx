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
        history.push(`/boat/${id}`);
    }

    return (
        <div className="col s6 m4" onClick={() => goToAvatar(boat.id)} onMouseEnter={showBorder} onMouseLeave={hideBorder}>
          <div className="card" style={{ borderColor: color, borderRadius: '10px', display: 'flex', flexDirection: 'column' }}>
            <div className="card-image">
              <img src={boat.picture} alt={boat.name} style={{ height: '200px', objectFit: 'cover', borderRadius: '10px 10px 0 0' }} />
            </div>
            <div className="card-content" style={{ padding: '10px' }}>
              <p style={{ wordWrap: 'break-word', textAlign: 'center', margin: '0' }}>{boat.name}</p>
            </div>
          </div>
        </div>
      );
}
  
export default BoatCard;