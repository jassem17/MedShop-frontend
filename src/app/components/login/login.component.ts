import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/common/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  erreur = 0;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
  }

  onLoggedin() {
    console.log(this.user);
    /*let isValidUser: Boolean = this.authService.SignIn(this.user);
    if (isValidUser)
      this.router.navigate(['/']);
    else
      //alert('Login ou mot de passe incorrecte!');
      this.erreur=1;*/
    this.authService.getUserFromDB(this.user.username).subscribe(
      (usr: User) => {
      if ( usr.username == this.user.username && usr.password == this.user.password)
     
     {
      this.authService.signIn(usr);
      this.router.navigate(['/']);
    }
    
    else
    alert('Login ou Mot de passe erronées');

    this.erreur = 1;

    
    }
    , (err) => console.log(err));

}}
