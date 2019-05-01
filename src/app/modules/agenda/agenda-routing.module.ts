
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/auth/auth.guard';
import { AgendaComponent } from './components/agenda/agenda.component';

const routes: Routes = [{
  path: 'agenada',
  component: AgendaComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }