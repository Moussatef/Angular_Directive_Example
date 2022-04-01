import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private apiUrl = "https://api.thecatapi.com/v1/images/search"
  constructor(private http: HttpClient) { }

  

}
