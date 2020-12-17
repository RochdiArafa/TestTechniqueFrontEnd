import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../entity/User';

@Injectable({
  providedIn: 'root'
})
export class ApiUsersService {
  private Base_URL = ' http://localhost:3000/';

  constructor(private http: HttpClient) {

  }

  //methode pour recuperer la liste des utilisateur à partir du fichier json
  public getUsers(): Observable<any> {
    return this.http.get(this.Base_URL + "users");
  }


  //Methode pour supprimer un utilisateur
  public deleteUser(id) {
    this.http.delete(this.Base_URL + "users/" + id).subscribe(data => {
      console.log(data);
    });
  }

  //Methode pour ajouter un utilisateur
  public addUser(user: User) {
    this.http.post(this.Base_URL + "users/", user).subscribe(data => {
      console.log(data);
    });
  }

  //Methode pour modifier un utilisateur
  public updateUser(user: User,id :number) {
    this.http.put(this.Base_URL + "users/"+id, user).subscribe(data => {
      console.log(data);
    });
  }
}


