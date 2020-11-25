import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  nombrePersona:string = '';
  
  

  constructor( private router: Router) { 
    this.nombrePersona = localStorage.getItem("nombre");
  }

  ngOnInit(): void {
  }

  logOut(){
    this.router.navigate(['/']);
    this.nombrePersona = '';
    localStorage.removeItem("nombre");
    this.router.navigate(['']);
  }

}
