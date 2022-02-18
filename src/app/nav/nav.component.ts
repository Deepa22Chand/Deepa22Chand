import { Component, OnInit } from '@angular/core';
import { NavbarService } from '../navbar.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor( public nav: NavbarService, public router: Router) { }

  ngOnInit() {
  }
  logout(){
    console.log("logout");
    localStorage.removeItem("userAccessToken");
    localStorage.clear();
    this.router.navigate(['']);
  }

}
