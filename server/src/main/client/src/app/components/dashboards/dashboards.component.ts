import { Component, OnInit } from '@angular/core';
import { ContaService } from '../../services/conta/conta.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
})
export class DashboardsComponent implements OnInit {

  chart = [];

  constructor( private _contaService: ContaService) { }

  ngOnInit() {
    this._contaService.list().subscribe(res => {
      let totalsPie = this.extractDataforPie(res);
      this.chart = new Chart('canvas', {
        type: 'pie',
        data: {
          labels: ['Pagamentos', 'Recebimentos'],
          datasets: [
            {
              label: 'Points',
              backgroundColor: ['#9e4d4d','#4d9e50'],
              data: [totalsPie[1], totalsPie[0]]
            }
          ]
        }
      })
    })
  }

  extractDataforPie(data) {
    let recebimentos = data.filter((val) => val.tipo == 0).length;
    let pagamentos = data.filter((val) => val.tipo == 1).length;
    return [recebimentos, pagamentos];
  }

}
