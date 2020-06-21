import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//modulo para el ngmodule
import {FormsModule} from '@angular/forms';
import { SharedComponentModule } from '../sharedComponents/sharedComponent.module';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphic1Component
    ],
    imports:[
        SharedComponentModule,
        FormsModule,
        SharedModule,
        PAGES_ROUTES
   ],
    exports:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphic1Component
    ],
    providers:[]
})
export class PagesModule{}