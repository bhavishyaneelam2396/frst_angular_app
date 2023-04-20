import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { ProducerRoutingModule } from './producer.routing.module';
import { AddNewItemComponent } from './add-new-item/add-new-item.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [AddNewItemComponent],
  imports: [
    CommonModule,
    RouterModule,
    ProducerRoutingModule,
    AngularMaterialModule
  ]
})
export class ProducerModule { }
