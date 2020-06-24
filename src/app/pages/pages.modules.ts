import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';

//modulo para el ngmodule

import { SharedComponentModule } from '../sharedComponents/sharedComponent.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
    declarations:[
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphic1Component,
        AccountSettingsComponent
    ],
    imports:[
        SharedComponentModule,
       // FormsModule,
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