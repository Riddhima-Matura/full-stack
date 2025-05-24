import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PrivateTemplateComponent } from './shared/layout/private-template/private-template.component';
import { PublicTemplateComponent } from './shared/layout/public-template/public-template.component';
import { PrivateTemplateLayoutRoutes } from './shared/routes/private-template.routes';
import { PublicTemplateLayoutRoutes } from './shared/routes/publix-template.routes';

const routes: Routes = [
  // {
  //   path:'',
  //   component:PublicTemplateComponent,
  //   children:PublicTemplateLayoutRoutes
    
  // },
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'main',
    component:PrivateTemplateComponent,
    children:PrivateTemplateLayoutRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
