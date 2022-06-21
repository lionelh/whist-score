import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { DatabaseCountersComponent } from './pages/database-counters/database-counters.component';

@NgModule({
  declarations: [
    DatabaseCountersComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaintenanceRoutingModule
  ],
})
export class MaintenanceModule { }
