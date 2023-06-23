import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from 'src/app/shared/services/data.service';

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule,
    MaterialModule,
    HttpClientModule,
  ]
})
export class MainModule { }
