import { Component, OnInit } from '@angular/core';
//funcion creada en el common.js es una funcion que envuelve todo el
// codigo y se la usa en este componente
declare function init_plugins();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
