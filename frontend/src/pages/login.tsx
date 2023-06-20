import React, { FunctionComponent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AuthenticationService from '../services/authentication-service';
import './login.css'
type Field = {
  value?: any,
  error?: string,
  isValid?: boolean
};

type Form = {
  username: Field,
  password: Field
}

const Login: FunctionComponent = () => {

  const history = useHistory();

  const [form, setForm] = useState<Form>({
    username: { value: '' },
    password: { value: '' },
  });

  const [message, setMessage] = useState<string>('Vous êtes déconnecté.');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const fieldName: string = e.target.name;
    const fieldValue: string = e.target.value;
    const newField: Field = { [fieldName]: { value: fieldValue } };

    setForm({ ...form, ...newField});
  }

  const validateForm = () => {
    let newForm: Form = form;

    // Validator username
    if(form.username.value.length < 3) {
      const errorMsg: string = 'Votre prénom doit faire au moins 3 caractères de long.';
      const newField: Field = { value: form.username.value, error: errorMsg, isValid: false };
      newForm = { ...newForm, ...{ username: newField } };
    } else {
      const newField: Field = { value: form.username.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ username: newField } };
    }

    // Validator password
    if(form.password.value.length < 3) {
      const errorMsg: string = 'Votre mot de passe doit faire au moins 3 caractères de long.';
      const newField: Field = {value: form.password.value, error: errorMsg, isValid: false};
      newForm = { ...newForm, ...{ password: newField } };
    } else {
      const newField: Field = { value: form.password.value, error: '', isValid: true };
      newForm = { ...newForm, ...{ password: newField } };
    }

    setForm(newForm);

    return newForm.username.isValid && newForm.password.isValid;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isFormValid = validateForm();
    if(isFormValid) {
      setMessage('👉 Tentative de connexion en cours ...');
      AuthenticationService.login(form.username.value, form.password.value).then(isAuthenticated => {
        if(!isAuthenticated) {
          setMessage('🔐 Identifiant ou mot de passe incorrect.');
          return;
        }
        
        history.push('/boat');
        
      });
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={(e) => handleSubmit(e)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div className="row">
          <div className="col s12 m8 offset-m2 center-align">
            {/* Form message */}
            {message && (
              <div style={{margin: '10px'}}>
                <div>{message}</div>
              </div>
            )}
            {/* Field username */}
            <div className="form-group">
              <label htmlFor="username">Identifiant</label>
              <input
                id="username"
                type="text"
                name="username"
                className="form-control"
                style={{ maxWidth: '200px', textAlign: 'center' }}
                value={form.username.value}
                onChange={(e) => handleInputChange(e)}
              ></input>
            </div>
            {/* Field password */}
            <div className="form-group">
              <label htmlFor="password">Mot de passe</label>
              <input
                id="password"
                type="password"
                name="password"
                className="form-control"
                style={{ maxWidth: '200px', textAlign: 'center' }}
                value={form.password.value}
                onChange={(e) => handleInputChange(e)}
              ></input>
            </div>
            {/* Submit button */}
            <div className="center">
              <button type="submit" className="btn">
                Valider
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
 
export default Login;