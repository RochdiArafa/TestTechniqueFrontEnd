import { Component, OnInit , Input , Output, EventEmitter} from '@angular/core';
import { User } from '../entity/User';

@Component({
  selector: 'app-config-side-bar',
  templateUrl: './config-side-bar.component.html',
  styleUrls: ['./config-side-bar.component.css']
})
export class ConfigSideBarComponent implements OnInit {

  @Input() selectedUser : User = null;
  id :number;
  nom :string = "";
  prenom :string = "";
  nb_enfant :number;

  //pour detecter l'envennement de changement
  @Output() change: EventEmitter<User> = new EventEmitter<User>();

  constructor() { 
    
  }

  //initialiser la formulaire avec les donnés necassaire à l'initialisation de composant
  ngOnInit(): void {
    this.id = this.selectedUser['_id'];
    this.nom = this.selectedUser['_prenom'];
    this.prenom = this.selectedUser['_nom'];
    this.nb_enfant = this.selectedUser['_nombre_enfants'];
  }

  //methode pour detecter la modification et le renvoyer au composant parent
  userChange() {
    this.change.emit(this.selectedUser);
  }

}
