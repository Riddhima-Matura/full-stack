import {CUSTOM_ELEMENTS_SCHEMA ,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { PrivateTemplateComponent } from './layout/private-template/private-template.component';
import { PublicTemplateComponent } from './layout/public-template/public-template.component';
import { HeaderComponent } from './layout/private-template/header/header.component';
import { SidebarComponent } from './layout/private-template/sidebar/sidebar.component';
import { MaterialModuleModule } from './material/material-module/material-module.module';
import { FooterComponent } from './layout/private-template/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LoginComponent } from '../auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgApexchartsModule } from 'ng-apexcharts';



@NgModule({
  declarations: [
    PrivateTemplateComponent,
    PublicTemplateComponent,
    HeaderComponent,  
    SidebarComponent,
    FooterComponent ,
    LoginComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModuleModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    NgApexchartsModule 
    // BrowserAnimationsModule,
    // NgxSpinnerService
  ],
   exports: [
    HeaderComponent,
    SidebarComponent,
    PrivateTemplateComponent,
    PublicTemplateComponent,
    MaterialModuleModule,
    ReactiveFormsModule,
    CommonModule,
    LoginComponent 
  ],
  
})
export class SharedModule { }
