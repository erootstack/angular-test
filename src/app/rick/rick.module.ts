import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TablaComponent } from './pages/tabla/tabla.component';
import { MaterialModule } from '../material/material.module';





@NgModule({
  declarations: [
    TablaComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class RickModule { }
