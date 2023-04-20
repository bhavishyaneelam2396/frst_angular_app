import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductGridComponent } from '../core/shared/product-grid/product-grid.component';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';

const routes: Routes = [{path:'addNewItem',component:AddNewItemComponent},
{path:'products',component:ProductGridComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProducerRoutingModule { }
