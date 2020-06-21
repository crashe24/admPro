import { Component, OnInit, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafico',
  templateUrl: './grafico.component.html',
  styleUrls: ['./grafico.component.css']
})
export class GraficoComponent implements OnInit {

  @Input()
  public doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input()
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100]
  ];
  @Input()
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
