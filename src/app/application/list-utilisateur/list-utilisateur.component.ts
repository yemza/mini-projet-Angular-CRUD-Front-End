import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotificationService } from 'src/app/services/notification.service';
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

  constructor(private utilisateurService : UtilisateurService,
    private notificationService : NotificationService) { }

  ngOnInit(): void {
    this.getUsers()
  }



  getUsers(){
    this.subs.add(
    this.utilisateurService.getUsers().subscribe((response) =>{
      this.listUtilisateur = response;
      console.log(this.listUtilisateur)
    },Error=>{
      console.log()

    })
    
    )
  }


  deleteUser(idUSer : any){
    this.subs.add(
      this.utilisateurService.deleteUserbyId(idUSer).subscribe((response)=>{
        console.log(response)
        this.notificationService.error("Supprission",  "Utilisateur Supprimé Avec Succès")
        this.getUsers();
      })
    )
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
