import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CityService } from 'src/app/services/city.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { ICity } from 'src/app/_shared/Models/i-city';
import { IUser } from 'src/app/_shared/Models/i-user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

   form!: FormGroup;
   cities : ICity[] =[];
   private subs = new Subscription();

   
  constructor(private fb: FormBuilder , private cityService : CityService,
    private utilisateurService : UtilisateurService,
    private notificationService : NotificationService,
    private route: Router) { }

  ngOnInit(): void {
    this.createForm();
    this.getCities();
  }
  createForm() {
   this.form = this.fb.group({
    firstName: ["", Validators.required],
    lastName: [null, Validators.required],
    email:    [null, Validators.required],
    userName: [null, Validators.required],
    BirthDate: [null, Validators.required],
    city:     [null, Validators.required],
    country: ["Morocco", Validators.required],
   })
  }
  onSubmit(){
    const city = this.cities.find(city => city.id = this.form.get("city")?.value)
    this.form.get('city')?.setValue(city);
    this.addUser();
  }

 /**
  * get All Cities
  */
  getCities() {
    this.subs.add(
    this.cityService.getCities().subscribe(response =>{
      this.cities = response;
    }))
  }



/**
 * Add User
 */
 addUser() {
  this.subs.add(
   this.utilisateurService.addUser(this.form.value).subscribe(response =>{
   setTimeout(() => {
    this.route.navigateByUrl('/application/utilisateurs')
    this.notificationService.error("User Added" , "User added successfully")

   }, 1000)
 },Error=>{
this.notificationService.error("adding User" , "error adding user")
 })
 )
}

ngOnDestroy(): void {
  this.subs.unsubscribe();
}
 
}
