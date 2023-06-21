export default class AuthenticationService {
  static isAuthenticated: boolean = false;

  static login(username: string, password: string): Promise<boolean> {
    return fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(response => {
        if (response.ok) {
          return response.json(); // Convertir la réponse en JSON
        } else {
          throw new Error('Échec de la requête de connexion');
        }
      })
      .then(data => {
        const token = data.token; // Supposons que le token est disponible dans la propriété "token" de la réponse JSON
        localStorage.setItem('token', token); // Enregistrer le token dans le localStorage
        console.log('Token:', token);
        this.isAuthenticated = true;
        return true;
      })
      .catch(error => {
        console.error('Erreur:', error);
        this.isAuthenticated = false;
        return false;
      });
  }    
}
  
  
  
  