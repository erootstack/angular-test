import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarComponent } from './pages/listar/listar.component';
import { MaterialModule } from './material/material.module';





@NgModule({
  declarations: [
    ListarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RickModule { }
