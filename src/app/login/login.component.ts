import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../usuario.service';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginServer ={
    username: '',
    password: '',
    nombre: ''
  }

  usuario = {
    username: '',
    password: '',
    nombre: ''
  }

  constructor(private userService: UsuarioService, private router: Router) {

   }

  ngOnInit(): void {
  }

  login(){
    this.userService.loadUserByUsername(this.usuario.username);
    
    this.userService.singleUserSubject.subscribe((data)=>
    {
      if(data != undefined)
      {
        this.loginServer = data;
        this.checkCredentials();
      }
      else{
        console.log("Error");
      }
      // this.loginFalse();
    })

  }

  procesarFormulario(form: NgForm) {
    console.log("procesando formulario");
  }

  checkCredentials(){
    // console.log(this.usuario);
    // console.log(this.loginServer);

    if(this.usuario.username == this.loginServer.username){
      if(this.usuario.password == this.loginServer.password){
        this.loginTrue();
        }else{
        this.loginFalse();
        }
    } else {
      this.loginFalse();
    }
  }

  loginTrue(){
    console.log(this.loginServer.nombre);
    localStorage.setItem("nombre" , this.loginServer.nombre);
    this.router.navigate(['/home/']);
  }

  loginFalse(){
    alert("Al parecer tus credenciales son incorrectas");
  }
}
