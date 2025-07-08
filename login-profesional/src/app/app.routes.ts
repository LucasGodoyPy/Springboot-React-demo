import { Routes } from '@angular/router';
import { LoginComponent } from './login/login'; // Usamos el nuevo componente
import { DashboardComponent } from './dashboard/dashboard';
import { HomeComponent } from './home/home';

export const routes: Routes = [
{ path: '', redirectTo: '/login', pathMatch: 'full' },
{ path: 'login', component: LoginComponent },
{ path: 'dashboard', component: DashboardComponent },
{ path: 'home', component: HomeComponent },
{ path: '**', redirectTo: '/login' }
];
