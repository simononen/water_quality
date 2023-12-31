import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    SidebarComponent
  ]
})
export class SharedModule { }
