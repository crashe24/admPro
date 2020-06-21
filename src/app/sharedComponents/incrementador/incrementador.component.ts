import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit {


  //referencia del html
  @ViewChild('txtProgress') txtPorcentaje: ElementRef;
  @Input() valorInicial:number;
  @Input('nombreLeyenda') leyenda:string;

  @Output() cambioPorcentaje: EventEmitter<number> = new EventEmitter<number>();
  porcentaje:number;
  constructor() { 
    this.leyenda = "leyenda";
    this.valorInicial =0;
    
  }

  ngOnInit(): void {
    this.porcentaje = this.valorInicial;
  }

  aumentarProgreso(){
    if (this.porcentaje < 100){
      this.porcentaje++;
    }

    this.cambioPorcentaje.emit(this.porcentaje);
  }

  disminuirProgreso(){
    if (this.porcentaje > 0){
      this.porcentaje--;
    }
    this.cambioPorcentaje.emit(this.porcentaje);
  }

  verificarCambio(nuevoValor:number) {

    //let elementoHtml:any = document.getElementsByName('porcentaje')[0];

      
    if (nuevoValor >=100 ) {
      this.porcentaje = 100;
    } else  if (nuevoValor < 0) {
      this.porcentaje = 0;
    } else  {
      this.porcentaje = nuevoValor;
    }

    //elementoHtml.value = this.porcentaje;
    this.txtPorcentaje.nativeElement.value = this.porcentaje;
    this.cambioPorcentaje.emit(this.porcentaje);
    // foco
    this.txtPorcentaje.nativeElement.focus;
  }
}
