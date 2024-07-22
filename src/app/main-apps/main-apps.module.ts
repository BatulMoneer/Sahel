import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppsRoutingModule } from './main-apps-routing.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    MainAppsRoutingModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class MainAppsModule { }
