import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Boat from '../models/boat';
import BoatService from '../services/boat-service';
//import formatType from '../helpers/format-type';
  // 3h40 de video
type Props = {
  boat: Boat,
  isEditForm: boolean
};
  
type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = {
    picture: Field,
    name: Field,
    description: Field,
}

const BoatForm: FunctionComponent<Props> = ({boat, isEditForm}) => {
  
  const history = useHistory();
  
  const [form, setForm] = useState<Form>({
    picture: {value: boat.picture},
    name: { value: boat.name, isValid: true},
    description: { value: boat.description, isValid: true},
  });

  
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
      boat.picture = form.picture.value;
      boat.name = form.name.value;
      boat.description = form.description.value;

      isEditForm ? updateBoat() : addBoat()
    }
  }

  const addBoat = () => {
    BoatService.addBoat(boat).then(() => history.push('/boat'));
  }

  const updateBoat = () => {
    BoatService.updateBoat(boat).then(() => history.push(`/boat/${boat.id}`))
  }

  const isAddForm = () => {
    return !isAddForm;
  }

  const validatorForm = () => {
    let newForm: Form = form;

    if (isAddForm()) {
      const start = "";
      const end = ".png"

      if (!form.picture.value.startsWith(start) || !form.picture.value.endsWith(end)) {
        const errorMsg: string = "l'url n'est pas valide";
        const newField: Field = { value: form.picture.value, error: errorMsg, isValid: false};
        newForm = {...form, ...{picture: newField}};
      }else {
        const newField: Field = {value: form.picture.value, error: '', isValid: true};
        newForm = { ...form, ...{picture: newField}};
      }
    }

    if(!/^[a-za-zàéè ]{3,25}$/.test(form.name.value)) { // expression reguliere
      const errorMsg: string = "le nom de l'Boat est requis (1-25)";
      const newField: Field = {value: form.name.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{name: newField} };  
    } else {
      const newField: Field = { value: form.name.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField} };
    }

    if(!/^[a-za-zàéè ]{3,80}$/.test(form.description.value)) {
      const errorMsg: string = "pas ouf";
      const newField: Field = {value: form.description.value, error: errorMsg, isValid: false};
      newForm = {...newForm, ...{description: newField} };  
    } else {
      const newField: Field = { value: form.description.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ name: newField} };
    }

    setForm(newForm);
    return newForm.name.isValid;
  }

  const deleteBoat = () => {
    BoatService.deleteBoat(boat).then(() => history.push(`/Boat`))
  }
  
  return (
    <form onSubmit={e => handleSubmit(e)}>
      <div className="row">
        <div className="col s12 m8 offset-m2">
          <div className="card hoverable">
            {isEditForm && (
            <div className="card-image">
              <img src={boat.picture} alt={boat.name} style={{width: '250px', margin: '0 auto'}}/>
              <span className='btn-floating halfway-fab waves-effect waves-light'>
                <i onClick={deleteBoat} className='material-icons'>delete</i>
              </span>
            </div>
            )}
            <div className="card-stacked">
              <div className="card-content">
                {/* Boat picture */}
                {isAddForm() && (
                <div className="form-group">
                  <label htmlFor="name">Img</label>
                  <input id="picture" name="picture" type="text" className="form-control" value={form.picture.value} onChange={e => handelInputChange(e)}></input>
                  {form.picture.error &&
                  <div className='card-panel red accent-1'> 
                    {form.picture.error}
                  </div>}
                </div>
                )}
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
                  <label htmlFor="name">description</label>
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