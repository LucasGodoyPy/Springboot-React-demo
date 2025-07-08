# Fullstack Login Application (Angular & Spring Boot)

Este proyecto es una aplicación web de ejemplo que implementa un sistema de autenticación y autorización de usuarios. Consta de un frontend desarrollado con Angular y un backend robusto construido con Spring Boot y Spring Security, utilizando PostgreSQL como base de datos.

## 🚀 Características Principales

* **Autenticación de Usuarios:** Permite a los usuarios iniciar sesión utilizando credenciales válidas.
* **Autorización Basada en Roles:** Diferencia el acceso a rutas y contenido según el rol del usuario (`ADMIN` o `USER`).
* **Rutas Protegidas:**
    * `/dashboard`: Accesible solo para usuarios con rol `ADMIN`.
    * `/home`: Accesible solo para usuarios con rol `USER`.
* **Página Pública:** Contenido accesible sin necesidad de autenticación.
* **Configuración de CORS:** Permite la comunicación segura entre el frontend de Angular y el backend de Spring Boot.
* **Usuarios Predeterminados:** Creación automática de usuarios `admin` y `usuario` al iniciar la aplicación por primera vez.

## 💻 Tecnologías Utilizadas

El proyecto está dividido en dos partes principales:

### Frontend (`login-profesional`)
* **Angular** v20.0.0
* **TypeScript**
* **Tailwind CSS** (para estilos)
* **RxJS** (para manejo de observables)

### Backend (`Login`)
* **Java** (Requiere JDK 24 o superior)
* **Spring Boot** v3.5.3
* **Spring Security**
* **Spring Data JPA**
* **PostgreSQL** (Base de datos)
* **Lombok** (para reducir código boilerplate)
* **Thymeleaf** (Aunque el frontend principal es Angular, el backend usa Thymeleaf para el formulario de login integrado)
* **Maven** (Gestor de dependencias)

## 📁 Estructura del Proyecto

El repositorio está organizado en dos directorios principales:





├── Login/                 # Contiene el código fuente del backend (Spring Boot)
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/
│   │   │   │   └── com/lucas_login/Login/ # Lógica de la aplicación Spring Boot
│   │   │   └── resources/ # Archivos de configuración y plantillas (application.properties, login.html)
│   │   └── test/
│   ├── pom.xml            # Archivo de configuración de Maven
│   └── ...
├── login-profesional/     # Contiene el código fuente del frontend (Angular)
│   ├── src/
│   │   ├── app/           # Componentes, servicios, rutas de Angular
│   │   ├── assets/
│   │   └── styles.css     # Estilos globales (Tailwind CSS)
│   ├── angular.json       # Configuración de Angular CLI
│   ├── package.json       # Dependencias y scripts de Node.js para Angular
│   └── ...
├── .gitignore             # Archivo para ignorar directorios y archivos de Git
└── README.md

## ⚙️ Configuración y Ejecución Local

Sigue estos pasos para poner en marcha el proyecto en tu máquina local.

### Requisitos Previos

Asegúrate de tener instalado:

* **Java Development Kit (JDK)** versión 24 o superior.
* **Apache Maven**.
* **Node.js** (versión compatible con Angular 20.x, generalmente 18+).
* **Angular CLI** (puedes instalarlo globalmente con `npm install -g @angular/cli`).
* **PostgreSQL** (versión compatible con `login_db` y `user` en `application.properties`).

### 1. Configuración de la Base de Datos

El backend utiliza PostgreSQL.

1.  Asegúrate de tener un servidor PostgreSQL en ejecución.
2.  Crea una base de datos llamada `login_db`.
3.  Modifica el archivo `Login/src/main/resources/application.properties` con tus credenciales si son diferentes a las predeterminadas:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5433/login_db
    spring.datasource.username=postgres
    spring.datasource.password=12345678
    ```
    (Asegúrate de que el puerto `5433` sea el correcto para tu instalación de PostgreSQL).

### 2. Ejecutar el Backend (Spring Boot)

1.  Abre tu terminal y navega hasta el directorio raíz del backend:
    ```bash
    cd Login
    ```
2.  Ejecuta la aplicación Spring Boot:
    ```bash
    mvn spring-boot:run
    ```
    El backend se iniciará en `http://localhost:8080`.

    Al iniciar la aplicación por primera vez, se crearán automáticamente dos usuarios para pruebas:
    * **Usuario Admin:**
        * `username`: `admin`
        * `password`: `admin123`
    * **Usuario Regular:**
        * `username`: `usuario`
        * `password`: `user123`

### 3. Ejecutar el Frontend (Angular)

1.  Abre una **nueva terminal** y navega hasta el directorio raíz del frontend:
    ```bash
    cd login-profesional
    ```
2.  Instala las dependencias de Node.js:
    ```bash
    npm install
    ```
3.  Inicia el servidor de desarrollo de Angular:
    ```bash
    ng serve
    ```
    El frontend se iniciará en `http://localhost:4200/`.

### 4. Acceder a la Aplicación

Una vez que ambos, el backend y el frontend, estén en ejecución:

* Abre tu navegador y ve a: `http://localhost:4200/`
    * Serás redirigido a la página de inicio de sesión.
* Puedes probar las siguientes rutas directamente en el backend (solo si el backend está levantado y no estás usando el frontend):
    * `http://localhost:8080/login` → Página de login (gestionada por Thymeleaf en el backend)
    * `http://localhost:8080/v1/admin` → Endpoint de administrador
    * `http://localhost:8080/v1/home` → Endpoint de usuario
    * `http://localhost:8080/public/home` → Endpoint público

### Credenciales de Prueba (para usar en el frontend de Angular)

* **Administrador:**
    * Usuario: `admin`
    * Contraseña: `admin123`
* **Usuario Estándar:**
    * Usuario: `usuario`
    * Contraseña: `user123`

