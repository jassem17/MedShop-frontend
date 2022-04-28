import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Role } from '../common/role';
import { User } from '../common/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /*users: User[] = [{ "username": "admin", "password": "123", "roles": ['ADMIN'] },
  { "username": "jassem", "password": "123", "roles": ['USER'] }];*/
  public loggedUser: any;
  public isloggedIn: Boolean = false;
  public roles: Role[] | undefined;
  apiURL: string = 'http://localhost:8080/login'
  constructor(private router: Router,
    private http:HttpClient) { }
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }
  
  signIn(user :User){
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.roles = user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }

  getUserFromDB(username: string): Observable<User> {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url);
  }
  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
    return false;
    this.roles.forEach((curRole) => {
    if(curRole.role == 'ADMIN') {
    admin = true;
    }
    });
    return admin;
    }
    


  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username :string){
    this.getUserFromDB(username).subscribe((user: User)=>{
    this.roles = user.roles;
    });
    }
}
