import Boat from "../models/boat";
 
export default class BoatService {

  static getBoats(): Promise<Boat[]> {
    return fetch('http://localhost:3000/api/boats', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    })
    //  .then(_ => console.log(localStorage.getItem('token')))
      .then(response => response.json())
      .catch(error => this.handleError(error));
  }
 
  static getBoat(id: number): Promise<Boat|null> {
    return fetch(`http://localhost:3000/api/boats/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}` 
      }
    })
      .then(response => response.json())
      .then(data => this.isEmpty(data) ? null : data)
      .catch(error => this.handleError(error));
  }

  static updateBoat(boat: Boat): Promise<Boat> {
    return fetch(`http://localhost:3000/api/boats/${boat.id}`, {
        method: 'PUT',
        body: JSON.stringify(boat),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}` 
        }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static deleteBoat(boat: Boat): Promise<{}> {
    return fetch(`http://localhost:3000/api/boats/${boat.id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static createUser = (username: string, password: string): Promise<boolean> => {
    const userData = { username, password };
    return fetch('http://localhost:3000/api/signin', {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .catch(error => this.handleError(error)); 
  }

  static addBoat(boat: Boat): Promise<Boat> {
    return fetch('http://localhost:3000/api/boats', {
        method: 'POST',
        body: JSON.stringify(boat),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(response => response.json())
    .catch(error => this.handleError(error));
  }

  static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  static handleError(error: Error): void {
    console.error(error);
  }
}