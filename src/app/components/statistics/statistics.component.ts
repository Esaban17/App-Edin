import { Component, OnInit } from '@angular/core';
import { single } from './data';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  single:any[];
  view: any[] = [1000, 400];

  constructor() { 
    Object.assign(this, { single });
  }

  ngOnInit(): void {
  }

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = false;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Habilidades';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Puntos Obtenidos';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#2B7ED7']
  };

  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
