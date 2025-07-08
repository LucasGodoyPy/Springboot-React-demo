
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // 👈 1. Importa el proveedor de rutas
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes'; // 👈 2. Importa tus rutas

export const appConfig: ApplicationConfig = {
  // 3. Añade provideRouter(routes) a los providers
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
};
