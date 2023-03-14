import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication-app';
  username = "";
  password = "";

  constructor(private http: HttpClient) {}

  login(username: string, password: string): void {
    const body = { username, password };
    this.http.post('http://localhost:3000/api/login', body, {headers: {'Content-Type': 'application/json'}}).subscribe(
      (res: any) => {
        console.log(res);
        alert(res.message); // use the message property from the JSON response
      },
      (err) => {
        console.error(err);
        alert('Login failed');
      }
    );
  }
  
}
