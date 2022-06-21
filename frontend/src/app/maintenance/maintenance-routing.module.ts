import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatabaseCountersComponent } from './pages/database-counters/database-counters.component';

const routes: Routes = [
  { path: '', component: DatabaseCountersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule { }
