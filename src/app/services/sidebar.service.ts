import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    { titulo: 'Principal', icono:'mdi mdi-gauge', 
    submenu:[
      { titulo: 'Dashboard', icono:'mdi mdi-gauge', url:'/dashboard'},
      { titulo: 'ProgressBar', icono:'mdi mdi-gauge', url:'/progress'},
      { titulo: 'Graficos', icono:'mdi mdi-gauge', url:'/graficas1'},
    ]  
  }
  ];
  constructor() { }
}
