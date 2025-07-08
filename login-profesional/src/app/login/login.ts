import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth';

@Component({
selector: 'app-login',
standalone: true,
imports: [CommonModule, FormsModule],

templateUrl: './login.html',
})
export class LoginComponent {
username = '';
password = '';
message = '';
messageType = '';

constructor(private authService: AuthService, private router: Router) {}

  onLogin(): void {
    this.message = '';
    this.authService.login(this.username, this.password).subscribe({
      next: (response: any) => {
        // 1. Obtenemos el rol de la respuesta del backend
        const userRole = response.body.role;
        console.log('Rol del usuario:', userRole);

        // 2. Decidimos a dónde navegar basándonos en el rol
        if (userRole === 'ADMIN') {
          this.router.navigate(['/dashboard']); // Si es ADMIN, va al dashboard
        } else if (userRole === 'USER') {
          this.router.navigate(['/home']); // Si es USER, va al home
        } else {
          // Opcional: por si hay otros roles o un error
          this.message = 'Rol no reconocido.';
          this.messageType = 'error';
        }
      },
      error: (err: any) => {
        this.message = 'Usuario o contraseña incorrectos.';
        this.messageType = 'error';
      }
    });
  }
}


