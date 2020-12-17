import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { User } from '../entity/User';
import { ApiUsersService } from '../services/api-users.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {

  @Input() selectedUser : User = null;
  id :number;
  nom :string = "";
  prenom :string = "";
  nb_enfant: number;

  //pour detecter l'envennement de changement
  @Output() change = new EventEmitter<User>();

  constructor(private apiUsersService: ApiUsersService) { 
    
  }

  //initialiser la formulaire avec les donnés necassaire à l'initialisation de composant
  ngOnInit(): void {
    this.id = this.selectedUser['id'];
    this.nom = this.selectedUser['_prenom'];
    this.prenom = this.selectedUser['_nom'];
    this.nb_enfant = this.selectedUser['_nombre_enfants'];

    console.log('selected user : '+this.selectedUser);
    console.log(' user : '+this.nom);
  }

  //Methode pour supprimer l'utilisateur selectionné
  deleteUser(){
    this.apiUsersService.deleteUser(this.id);
    this.id = null;
    this.nom = "";
    this.prenom = "";
    this.nb_enfant = null;
  }

  //methode pour detecter la modification de nombre d'enfant et le renvoyer au composant parent
  nbEnfantChange() {
    this.change.emit(this.selectedUser);
  }


}
