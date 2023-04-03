import { NgModule } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {CdkTableModule} from '@angular/cdk/table';



import { MatSidenavModule } from '@angular/material/sidenav';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  
  exports:[
    MatCardModule,
    CdkTableModule,
    MatIconModule,
    MatListModule,
  
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule

  ],
  imports:[
    MatCardModule,
    CdkTableModule,
    MatIconModule,
    MatListModule,
  
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
