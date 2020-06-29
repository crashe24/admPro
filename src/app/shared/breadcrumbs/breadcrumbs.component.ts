import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  titulo: string;

  constructor(private router:Router, private title:Title, private meta:Meta) {

  
    this.getdataRoute()
    .subscribe( (evento:any)=>{
      this.titulo = evento.titulo; // titulo de las migas de pan 
      this.title.setTitle(this.titulo); // el titulo de la parte de arriba del browser
      const metaTag: MetaDefinition = {
        name:'description', context: this.titulo
      }

      this.meta.updateTag(metaTag);
    })
   }

  ngOnInit(): void {
  }

  getdataRoute(){
    return   this.router.events.pipe(
      filter(evento=> evento instanceof ActivationEnd),
      filter((evento:ActivationEnd) => evento.snapshot.firstChild ==null),
      map( (evento:ActivationEnd) =>  evento.snapshot.data)
    )
  }

}
