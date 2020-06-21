import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { GraficoComponent } from './grafico/grafico.component';

import { ChartsModule} from 'ng2-charts';

@NgModule({
    declarations:[IncrementadorComponent, GraficoComponent],
    imports:[ChartsModule,FormsModule],
    exports:[IncrementadorComponent,GraficoComponent]
})
export class SharedComponentModule{}