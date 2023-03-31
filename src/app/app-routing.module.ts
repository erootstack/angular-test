import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './rick/pages/listar/listar.component';

const routes: Routes = [
  {
    path: '', 
    component: ListarComponent,
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
