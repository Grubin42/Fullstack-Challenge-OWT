export default class UserService {

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

  static handleError(error: Error): void {
    console.error(error);
  }
}