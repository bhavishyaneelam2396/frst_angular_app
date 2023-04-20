import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UnauthorisedComponent } from './unauthorised/unauthorised.component';
import { PageBaseComponent } from './page-base/page-base.component';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { FormsModule } from '@angular/forms';
import { CoreRoutingModule } from './core-routing-module';
import { ProductGridComponent } from './shared/product-grid/product-grid.component';
import { Utils } from './shared/services/utils';
import { RouteGuardService } from './shared/services/route-guard.service';



@NgModule({
  declarations: [LoginComponent,UnauthorisedComponent, PageBaseComponent,ProductGridComponent],
  imports: [
    CommonModule,
    RouterModule,
    AngularMaterialModule,
    FormsModule,
    CoreRoutingModule,
  ],
  providers:[Utils,RouteGuardService]
})
export class CoreModule { }
