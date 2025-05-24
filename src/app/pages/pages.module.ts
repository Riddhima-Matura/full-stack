import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizComponent } from './quiz/quiz.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LearningMaterialComponent } from './Learning-material/Learning-material.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    UsersComponent,
    QuizComponent,
    LearningMaterialComponent,
    DashboardComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    NgApexchartsModule 
  ]
})
export class PagesModule { }
