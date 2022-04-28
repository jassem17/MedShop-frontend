import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {

  constructor(public authService : AuthService) { }

  ngOnInit(): void {
  }
  onLogout(){
    this.authService.logout();
  }

}
