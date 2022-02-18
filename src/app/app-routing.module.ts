import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthenticationGuard } from './authentication.guard';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  {
    path: "", 
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "home", 
    component: HomeComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about",
    component: AboutComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "about/:id",
    component: AboutComponent,
    canActivate: [AuthenticationGuard]
  }, {
    path: "contact",
    component: ContactComponent,
    canActivate: [AuthenticationGuard]
  },
  {
    path: "login",
    component: LoginComponent
  },
  
  {
    path: "**",
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
