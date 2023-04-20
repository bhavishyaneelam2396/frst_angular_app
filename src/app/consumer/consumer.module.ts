import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ConsumerRoutingModule } from './consumer-router.module';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    RouterModule,
    ConsumerRoutingModule,
    AngularMaterialModule
  ]
})
export class ConsumerModule { }
