import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductGridComponent } from './shared/product-grid/product-grid.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';

const routes: Routes = [{path:'',redirectTo:'/login',pathMatch: 'full'},
{path:'login',component:LoginComponent},
{path:'unauthorised',component:UnauthorisedComponent},
{path:'products',component:ProductGridComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
