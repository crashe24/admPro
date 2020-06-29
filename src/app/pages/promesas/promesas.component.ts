import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { retry, map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  subscripcion: Subscription;
  constructor() { 
    //transformacion de datos con el pipe
    this.subscripcion = this.regresaObservable().pipe (retry(2))
    .subscribe(
      respuesta=> console.log(respuesta),
      error =>console.log(error),
      ()=>console.log('finalizo'));
  }

  ngOnInit(): void {

  }

  regresaObservable(): Observable<Object>{
   return  new Observable( (observer)=>{
      let contador = 0;

      
      let intervalo =setInterval(()=>{
        contador++;
        const salida={
          valor:contador
        }
        observer.next(salida);
        /* se quita para utilizar el unsubscribe
        if (contador==4){
          clearInterval(intervalo);
          observer.complete();
        }
        if (contador == 5){
          clearInterval(intervalo);
          observer.error('!Error!!!!');
        }*/
      },1000);
      
    }).pipe(map(
      (respuestaObjeto: {valor}) => {
        return respuestaObjeto.valor;
      }
    ), filter((valor, index) =>{
        return valor%2==0?false:true;
    }))
  }

  ngOnDestroy(): void {
    
    this.subscripcion.unsubscribe();    
  }
}
