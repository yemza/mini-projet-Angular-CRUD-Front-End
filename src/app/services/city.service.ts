import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http : HttpClient) { }



 /**
  * get All Utilisateur
  */
 getCities():Observable<any> {
  return this.http.get(environment.ApiURL + "getCities");
 }


}
