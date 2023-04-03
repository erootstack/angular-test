import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Rickmorty } from '../../interfaces/rick.interfaces';
import { RickService } from '../../services/rick.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})

export class TablaComponent implements AfterViewInit, OnInit {
  
  Columns: string[] = [ 'id', 'name', 'gender', 'type', 'status', 'ver' ];
  dataSource = new MatTableDataSource<Rickmorty>;
  

  constructor( private rickService: RickService ) { }
  
   @ViewChild(MatPaginator) paginator!: MatPaginator;
    
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  } 
 
  cargaRick() {
    this.rickService.getRick()
        .subscribe( (res:any) =>{
          console.log(res);  
          if (!res.info){
            return console.log ('no info check data ');
          }
          else {
            this.dataSource.data = res.results;
          }                 
        })   
  }
  
  ngOnInit(): void { 
    this.cargaRick()
    
    
  }
}






