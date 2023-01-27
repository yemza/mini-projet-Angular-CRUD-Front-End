import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  userId: any= null;
  user!: IUser;

   
  constructor(private fb: FormBuilder , private cityService : CityService,
    private utilisateurService : UtilisateurService,
    private notificationService : NotificationService,
    private activeRouter: ActivatedRoute,
    private route: Router) { 
      
    }

  ngOnInit(): void {
    this.createFormVide();
    this.getCities();
    this.userId= this.activeRouter.snapshot.paramMap.get('id');
    if(this.userId != null){
      this.getUserbyId()
      console.log( this.userId)
    }
     

  
  }
  setFormValueswithUser() {
  console.log(this.user )
    this.setValueForm('firstName' , this.user?.firstName)
    this.setValueForm('lastName' , this.user?.lastName)
    this.setValueForm('email' , this.user?.email)
    this.setValueForm('userName' , this.user?.userName)
    this.setValueForm('birthDate' , formatDate(this.user.birthDate != null ? this.user.birthDate : new Date()  , 'yyyy-MM-dd', 'en'))
    this.setValueForm('city' , this.user?.city?.id)
    this.setValueForm('country' , this.user?.country)
  }

  createFormVide() {
   this.form = this.fb.group({
    firstName: [null, Validators.required],
    lastName: [null, Validators.required],
    email:    [null, Validators.required],
    userName: [null, Validators.required],
    birthDate: [null, Validators.required],
    city:     [null, Validators.required],
    country: ['Morocco', Validators.required],
   })
  }
  onSubmit(){
    const city = this.cities.find(city => city.id = this.form.get('city')?.value)
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
    this.notificationService.success('User Added' , 'User added successfully')

   }, 1000)
 },Error=>{
this.notificationService.error('adding User' , 'error adding user')
 })
 )
}

getUserbyId(){
  this.subs.add(
    this.utilisateurService.getUserbyId(this.userId).subscribe(response =>{
      this.user = response;
      this.setFormValueswithUser();
    }))
}

  setValueForm( controleName: any , value: any ){
   this.form?.get(controleName)?.setValue(value);
  }

ngOnDestroy(): void {
  this.subs.unsubscribe();
}
 
}
