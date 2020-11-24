import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { Usuario } from '../app/usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  newURL:string;
  urlGetUser = 'http://localhost:3001/api/users';
  // urlGetUser = environment.url + '/api/users';

  usuariosName:any = [];
  
  usuariosArray = [];
  allUsuariosNameSubject = new BehaviorSubject<[]>([]);

  singleUser;
  singleUserSubject = new BehaviorSubject<Usuario>(Usuario[1]);

  answ = '';
  answSubject = new BehaviorSubject<string>('');

  usuarioLogin = {};
  usuariosLoginSubject = new BehaviorSubject<{}>({});

  constructor(private http: HttpClient) {
    this.readUsuariosNames();
    this.allUsuariosNameSubject.next(this.readUsuariosNames());


   }

   readUsuarios(): Usuario[]{
     return this.usuariosArray.slice();
   }

   readUsuariosNames(){
     return this.usuariosName.slice();
   }

   readSingleUser(){
    return this.singleUser;
  }

  readUsuarioLogIn(){
    return this.usuarioLogin;
  }

   //  ===========================================
  //  Get usuarios from server
  //  ===========================================
  loadAllUsersName() {
    this.http.get(this.urlGetUser).subscribe(
      (data) => {
        this.usuariosName = data;
        this.allUsuariosNameSubject.next(this.readUsuariosNames());
        // this.answSubject.next('Se cargaron los usuarios correctamente');
      },
      (err) => (console.log(err))
    );
  }

  loadUserByName(){
  
  }

  saveUser(userBody){
    this.newURL = this.urlGetUser;
    const userJSON = JSON.parse(JSON.stringify(userBody));
    this.http.post(this.newURL, userJSON).subscribe(
      (data) => {
        this.answSubject.next('Se guardo el usuario correctamente');
        // this.loadAllUsersName();
      },
      (err) => {
        console.log(err);
        this.answSubject.next('Hubo un problema al guardar el usuario');
      });
  }

  loadUserByUsername(username){
    this.newURL = this.urlGetUser + '/folio' + '/' + username;
    this.http.get(this.newURL).subscribe(
      (data) => {
        this.singleUser = data;
        this.singleUserSubject.next(this.readSingleUser());
      },
      (err) => (console.log(err))
    );

  }

  updateUserByUsername(username, usuarioBody){
    this.newURL = this.urlGetUser + '/folio' + '/' + username;
    this.http.put(this.newURL, usuarioBody).subscribe(
      (data) => {
        console.log(data);
        this.answSubject.next('Se actualizo correctamente el folio ' + username);
      },
      (err) => {
        console.log(err);
        this.answSubject.next('Hubo un error al actualizar' + username);
      }
    );
  }

  deleteUserByUsername(username){
    this.newURL = this.urlGetUser + '/folio' + '/' + username;
    this.http.delete(this.newURL).subscribe(
      (data) => {
        // console.log(data);
        this.answSubject.next('Se borro exitosamente');
      },
      (err) => {
        this.answSubject.next('Hubo un problema al eliminar el usuario ' + username);
        // console.log(err);
      }
    );
  }

  loginUser(username, bodyLogin){
    this.newURL = this.urlGetUser + '/folio' + '/' + username;
    this.http.post(this.newURL, bodyLogin).subscribe(
      (data) => {
        // console.log(data);
        this.usuarioLogin = data;
        this.usuariosLoginSubject.next(this.readUsuarioLogIn());
      },
      (err) => {
        // console.log(err);
        this.usuarioLogin = err;
        this.usuariosLoginSubject.next(this.readUsuarioLogIn());
      }
    );
  }

  
}
