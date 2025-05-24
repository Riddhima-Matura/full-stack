import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './chat/chat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LearningMaterialComponent } from './Learning-material/Learning-material.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';
import { UploadsComponent } from './uploads/uploads.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'learning-material',
    component:LearningMaterialComponent
  },
  {
    path:'quiz',
    component:QuizComponent
  },
  {
    path:'score',
    component:ScoreComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'upload',
    component:UploadsComponent
  },
  {
    path:'user',
    component:UsersComponent
  },
  {
    path:'chat',
    component:ChatComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
