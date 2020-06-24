import { Component, OnInit, Inject, ElementRef, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { SettingsService } from '../../services/settings.service';


@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {


  constructor(
    //@Inject(DOCUMENT) private documento,
    private rend:Renderer2,
    private ajustesService: SettingsService
  ) { }

  ngOnInit(): void {
    this.colocarCheck();
  }

  cambiarColor(tema:string,link:any){
    console.log('color :>> ', tema);
   // this.rend.addClass(link.nativeElement,'working');
   this.aplicarCheck(link);
    this.ajustesService.aplicarTema(tema);
    // let urlTemaIndex = `/assets/css/colors/${tema}.css`;
    // this.documento.getElementById('tema').setAttribute('href',urlTemaIndex)
    // //lcoalstorage
    // this.ajustesService.ajustes.tema = tema;
    // this.ajustesService.ajustes.temaUrl = urlTemaIndex;
    // this.ajustesService.guardarAjustes();
  }

  aplicarCheck(link:any){
    let selectores: any = document.getElementsByClassName('selector');

    for (let s of selectores){
      s.classList.remove('working');
    }
      link.classList.add('working');
    };
  
  colocarCheck(){
    let selectores: any = document.getElementsByClassName('selector');
    let tema = this.ajustesService.ajustes.tema;
    for (let s of selectores){
      if (s.getAttribute('data-theme') === tema) {
        s.classList.add('working');
        break;
      }    
    }

  }
}
