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
            localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NzI2MjY1NSwiZXhwIjoxNjg3MzQ5MDU1fQ.hOvjLY0d3GEi5a7NG3EayExvavmWP8_WJkIcaRoLWFA')
            console.log('response ======', localStorage.getItem('token'))
            this.isAuthenticated = true;
            return true;
          } else {
            this.isAuthenticated = false;
            return false;
          }
        })
        .catch(error => {
          console.error('Error:', error);
          this.isAuthenticated = false;
          return false;
        });
    }
  }
  
  
  
  