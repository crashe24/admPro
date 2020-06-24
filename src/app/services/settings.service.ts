import { Injectable, Inject } from '@angular/core';
import { Ajustes } from '../interfaces/ajustes';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes:Ajustes = {
    temaUrl:'/assets/css/colors/default-dark.css',
    tema:'default'
  }

  constructor(@Inject(DOCUMENT) private documento) { 
    this.cargarAjustes();
  }

  guardarAjustes() {
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes() {
    if (localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(tema: string){
    let urlTemaIndex = `/assets/css/colors/${tema}.css`;
    this.documento.getElementById('tema').setAttribute('href',urlTemaIndex)
    this.ajustes.tema = tema;
    this.ajustes.temaUrl = urlTemaIndex;
    this.guardarAjustes();
  }
}
