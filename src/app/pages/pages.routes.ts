import { RouterModule,Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphic1Component } from './graphic1/graphic1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';

const pagesRoutes: Routes = [
    {path:'',component:PagesComponent, children: [
        {path:'dashboard',component:DashboardComponent, data:{titulo:'Dashboard'}},
        {path:'progress',component:ProgressComponent, data:{titulo:'Progreso'}},
        {path:'graficas1',component:Graphic1Component, data:{titulo:'Graficas'}},
        {path:'promesas',component:PromesasComponent, data:{titulo:'Promesas y Observa'}},
        {path:'account-settings',component:AccountSettingsComponent, data:{titulo:'Configuraciones'}},
        {path:'',redirectTo:'/dashboard',pathMatch:'full'}
        ]},
    
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);