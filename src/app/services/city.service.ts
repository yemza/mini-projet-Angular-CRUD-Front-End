import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }



 /**
  * get All Utilisateur
  */
 getCities() {
  this.http.get(environment.ApiURL+ "getCities");
 }


}
