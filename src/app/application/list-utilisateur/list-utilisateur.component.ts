import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import { IUser } from 'src/app/_shared/Models/i-user';

@Component({
  selector: 'app-list-utilisateur',
  templateUrl: './list-utilisateur.component.html',
  styleUrls: ['./list-utilisateur.component.css']
})
export class ListUtilisateurComponent implements OnInit {
  private subs = new Subscription();
  listUtilisateur: IUser[] =[];

  constructor(private utilisateurService : UtilisateurService) { }

  ngOnInit(): void {
    this.getUsers()
  }



  getUsers(){
    this.subs.add(
    this.utilisateurService.getUsers().subscribe((response) =>{
      this.listUtilisateur = response;
      console.log(this.listUtilisateur)
    
    })
    
    )
  }



  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
