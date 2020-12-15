# HospitalApp (Student's app)

##Front-end

**This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.**
Se utilizo el framework de Angular para realizar 4 paginas a mostrar principalmente.

###Lo que se muestra en el prototipo

1.- Pagina de inicio / login:
- Tiene una seguridad pequeña pero util, esta basado en localstorage y en hacer una consulta para backend y comprobar que existe realmente el usuario y luego que si hacen match con la contraseña, si es asi pasa a la siguiente pagina.

2.- Pagina donde se muestran dispositivos:
- En primera instancia se muestran 4 espacios vacios con dispositivos apagados, luego hace cunsulta a la base de datos de Iot que utilizamos (ubidots), checa si hay en existencia, si hay en existencia, se muestra (Como prototipo esta hardcodeado, pero la idea a futuro es buscar cuales dispositivos son y mostrarlos segun dodne esten)

3.-Pagina 404
- Tiene una pagian 404 por si alguien desea entrar a alguna URL especifica y no tiene ni idea de la ruta (A futuro es checar credenciales y si no tiene solo mandarlo a 404)

4.- Pagina de dispositivos a detalle:
- Se muestra la informacion a detalle pero por el momento no tiene nada.

Ideas a futuro por parte de front-end

Mejorar login/la parte de seguridad.
Poder registrar usuarios.
Tener para modificar informacion de usuarios.

Hacer que los dispositivos no esten hardcoeados sino que sean de acuerdo a lo que se muestra por usuario.
Los usuarios puedes agregar mas dispositivos a su gusto/eliminarlos.
La pagina de detalles muestre informacion correcta y a demas agregar graficas.


##Back-end
Para el back-end de este proyecto se realizo en Node JS junto con Express y MongoDB
Se realizo el backend para que funcione por medio de llamadas Apis desde Angular que se conectan a este mismo y muestran la informacion necesaria

Para prototipo:
La parte de usuarios tiene :
- Busqueda especifica de usuarios
- Busqueda de todos los usuarios

Idea a futuro:
Quitar busqueda de todos los usuarios por gusto
Agregan JSONwebToken para aumentar la seguridad del usuario
Agregar editar usuario
Agregar CRUD para dispositivos.
Añadir mandar mensajes de correos al momento que lleguen a X necesidad.


