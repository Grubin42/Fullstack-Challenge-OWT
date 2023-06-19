import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Boat from '../models/boat';
import BoatService from '../services/boat-service';
//import formatType from '../helpers/format-type';
  // 3h40 de video
type Props = {
  boat: Boat
};
  
type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = {
    name: Field,
    description: Field,
}

const BoatForm: FunctionComponent<Props> = ({boat}) => {
  
  const [form, setForm] = useState<Form>({
    name: { value: boat.name, isValid: true},
    description: { value: boat.description, isValid: true},
  });

  const history = useHistory();
  
  const handelInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = {[fieldName]: { value: fieldValue }};
    
    setForm({...form, ...newField}); // ... permette de fusionner l objet form avec l objet newField
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validatorForm();

    if (isFormValid){
      boat.name = form.name.value;
      boat.description = form.description.value;
      BoatService.updateBoat(boat).then(() => history.push(`/boat/${boat.id}`));
    }
  }

  const validatorForm = () => {
    let newForm: Form = form;

    if(!/^[a-za-zàéè ]{3,25}$/.test(form.name.value)) { // expression reguliere
      const errorMsg: string = "le nom de l'Boat est requis (1-25)";
      const newField: Field = {value: form.name.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{name: newField} };  
    } else {
      const newField: Field = { value: form.name.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField} };
    }

    if(!/^[a-za-zàéè ]{3,25}$/.test(form.description.value)) {
      const errorMsg: string = "le nom de l'Boat est requis (1-25)";
      const newField: Field = {value: form.description.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{description: newField} };  
    } else {
      const newField: Field = { value: form.description.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField} };
    }

    setForm(newForm);
    return newForm.name.isValid && newForm.description.isValid;
  }

  const deleteBoat = () => {
    BoatService.deleteBoat(boat).then(() => history.push(`/Boats`))
  }
  
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable"> 
            <div className="card-image">
              <img src={boat.picture} alt={boat.name} style={{width: '250px', margin: '0 auto'}}/>
              <span className='btn-floating halfway-fab waves-effect waves-light'>
                <i onClick={deleteBoat} className='material-icons'>delete</i>
              </span>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                {/* Boat name */}
                <div className="form-group">
                  <label htmlFor="name">Nom</label>
                  <input id="name" name="name" type="text" className="form-control" value={form.name.value} onChange={e => handelInputChange(e)}></input>
                  {form.name.error &&
                  <div className='card-panel red accent-1'> 
                    {form.name.error}
                  </div>
                  }
                </div>
                {/* Boat genre */}
                <div className="form-group">
                  <label htmlFor="description">description</label>
                  <input id="description" name="description" type="text" className="form-control" value={form.description.value} onChange={e => handelInputChange(e)}></input>
                  {form.description.error &&
                  <div className='card-panel red accent-1'> 
                    {form.description.error}
                  </div>
                  }
                </div>
              </div>
              <div className="card-action center">
                {/* Submit button */}
                <button type="submit" className="btn">Valider</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
   
export default BoatForm;