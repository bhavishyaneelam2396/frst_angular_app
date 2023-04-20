import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGridComponent } from '../core/shared/product-grid/product-grid.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
{path:'user',component:UserComponent},
{path:'products',component:ProductGridComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsumerRoutingModule { }
