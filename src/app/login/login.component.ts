import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

//funcion creada en el common.js es una funcion que envuelve todo el
// codigo y se la usa en este componente
declare function init_plugins();
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
    init_plugins();
  }

  irADashboard(){
    console.log('ingresa al login :>> ');
    this.router.navigate(['/dashboard']);
  }
}
