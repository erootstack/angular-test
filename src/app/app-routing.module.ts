import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './rick/pages/tabla/tabla.component';


const routes: Routes = [
  {
    path: '', 
    component: TablaComponent,
    pathMatch: 'full'
  },

 /*  {
     path: 'buscar',
     component: 
  },
  {
     path: 'ordenar',
     component:         
  }, */
  {
     path: '**',
     redirectTo: ''
  }

    
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
