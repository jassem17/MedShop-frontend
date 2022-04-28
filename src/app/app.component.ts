import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  constructor(public authService:AuthService,public router : Router){}
  ngOnInit () {
    let isloggedin: any;
    let loggedUser:any;
    isloggedin = localStorage.getItem('isloggedIn');
    loggedUser = localStorage.getItem('loggedUser');
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
  
  
}
