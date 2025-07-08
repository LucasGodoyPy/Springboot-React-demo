import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn: 'root'
})
export class AuthService {
private loginUrl = 'http://localhost:8080/login';

constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    // El backend de Spring Security espera los datos como 'form-data'.
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    // Creamos las cabeceras para indicar el tipo de contenido.
    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    // Hacemos la petición POST y pedimos la respuesta completa.
    return this.http.post(this.loginUrl, body.toString(), {
      headers: headers,
      observe: 'response'
    });
  }
}
