import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageBaseComponent } from './core/page-base/page-base.component';
import { RouteGuardService } from './core/shared/services/route-guard.service';

const routes: Routes = [{path:'online-shopping-app',component:PageBaseComponent,
children:[
  {
    path: 'main',
    loadChildren: () => import('./core/core.module').then(m => m.CoreModule),
  },
  {
    path: 'consumer',
    loadChildren: () => import('./consumer/consumer.module').then(m => m.ConsumerModule),canActivate:[RouteGuardService],data:{userRole:'user'}
  },
  
  {
    path: 'producer',
    loadChildren: () => import('./producer/producer.module').then(m => m.ProducerModule),data:{userRole:'admin'},canActivate:[RouteGuardService]
  },
  
]},
{path:'',redirectTo:'online-shopping-app/main/login',pathMatch: 'full'},
{path:'**',redirectTo:'online-shopping-app/main/unauthorised',pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
