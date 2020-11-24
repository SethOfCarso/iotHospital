export class Usuario {
    username: string;
    password: string;
    nombre: string;

    constructor(
        username: string,
        password: string,
        nombre: string
    ){
        this.username = username;
        this.password = password;
        this.nombre = nombre;
    }
}
