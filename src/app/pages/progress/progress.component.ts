import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  
  porcentaje:number = 10;

  
  leyenda:string;
  constructor() { }

  ngOnInit(): void {
  }

  actualizar(evento: number) {
    this.porcentaje = evento;
  }

}
