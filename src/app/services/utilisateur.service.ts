import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
 public getUsers() {
  this.http.get(environment.ApiURL+ "getUsers");
 }


 /**
  * get USer by ID
  */
 public  getUserbyId(idUser :number) {
  this.http.get(environment.ApiURL +"getUsers?idUtilisateur=" +idUser);
 }


 /**
  * delete user by id
  */
 public deleteUserbyId(idUser :number) {
  this.http.delete(environment.ApiURL +"getUsers?idUtilisateur=" +idUser);

 }

  /**
  * name
  */
  public addUser(user :IUser) {
    this.http.post(environment.ApiURL +"getUsers?idUtilisateur=" , user);
  
   }

}
