import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Rickmorty } from '../interfaces/rick.interfaces';



@Injectable({
  providedIn: 'root'
})
export class RickService {

  private baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient) { }

  getRick() : Observable<Rickmorty> {
    return this.http.get<Rickmorty>(`${this.baseUrl}`);
  }
}
