import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContasComponent } from './components/contas/contas.component';
import { DashboardsComponent } from './components/dashboards/dashboards.component';

const routes: Routes = [
  {
    path: '',
    component: ContasComponent
  },
  {
    path: 'dashboards',
    component: DashboardsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
