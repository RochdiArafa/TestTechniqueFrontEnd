import { Component, OnInit } from '@angular/core';
import { User } from './entity/User';
import { ApiUsersService } from './services/api-users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-technique';
  listUsers: User[] = [];
  sideBar: boolean = false;
  showcarduser: boolean = true;
  selectedUser: User = null;
  newUser: User = new User;

  constructor(private apiUsersService: ApiUsersService) {
    //this.LoadListUsersFromJson(); // pour faire la mise à jour en temps réel
  }

  ngOnInit(): void {

  }

  /*
  * @ToDo
  * */
  //methode qui permet de faire un rappel à la methode afficher liste user de service
  LoadListUsersFromJson() {
    this.apiUsersService.getUsers().subscribe(data => {
      console.log(data);
      this.listUsers = data;
    });
  }

  /*
  * @ToDo 
  * */
  //methode qui permet de faire un rappel à la methode ajouter user de service
  SaveListUsersInJson() {
    this.apiUsersService.addUser(this.newUser);
    this.ShowSideBar(null);
  }

  //methode qui permet d'africher le comosant du sidebar l'orsque l'utoisateur clické sur le button select
  ShowSideBar(user) {
    this.selectedUser = user;

    this.sideBar = false;
    this.showcarduser = false;

    setTimeout(() => {
      this.sideBar = true;
      this.showcarduser = true;
    }, 5);

  }

  //pour detecter la changement de valeur nb d'enfant et ensuite faire la mise à jour 
  nbEnfantChange(event) {
    this.newUser.nombre_enfants = event.target.value;
  }

  //pour detecter la changement de valeur (nom,prenom) et ensuite faire la mise à jour 
  userChange(event) {
    if (event.target.id == 'nom')
      this.newUser.nom = event.target.value;

    if (event.target.id == 'prenom')
      this.newUser.prenom = event.target.value;
  }

}
