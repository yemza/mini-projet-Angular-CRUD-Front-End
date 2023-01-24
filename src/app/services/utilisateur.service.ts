import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { IUser } from '../_shared/Models/i-user';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http : HttpClient) { }



 /**
  * get All Utilisateur
  */
  getUsers(): Observable<any>  {
  return this.http.get(environment.ApiURL + "getUsers");
 }


 /**
  * get USer by ID
  */
   getUserbyId(idUser :number): Observable<IUser>  {
  return this.http.get(environment.ApiURL + "getUsers?idUtilisateur=" + idUser);
 }


 /**
  * delete user by id
  */
  deleteUserbyId(idUser :number): Observable<any>  {
  return this.http.delete(environment.ApiURL + "getUsers?idUtilisateur=" + idUser);

 }

  /**
  * name
  */
   addUser(user :IUser): Observable<IUser>  {
   return this.http.post(environment.ApiURL +"getUsers?idUtilisateur=" , user);
  
   }

}
