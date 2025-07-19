# Top brands project

## How to install
Run `docker compose up --build`
_Then the project can be opened in http://localhost:3000_

## Tech stack
* Laravel
* React + Redux
* Vite
* MySQL

## Additional implementations
* Docker
  * Backend and frontend are in different containers that will help for the scalability
  * Entrypoint for the backend part
* Laravel
  * CORS (`config/cors.php`)
  * Sanctum - hardcoded token in the `.env` file 
  * Separated request validations
  * Laravel mutators
  * Migrations, seeders, and factories
  * Middleware - `HandleCors` and `CheckToken`
* React
  * Boostrap 
  * Axios
  * Redux
    * Redux toolkit 
