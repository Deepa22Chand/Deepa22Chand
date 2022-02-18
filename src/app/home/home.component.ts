import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../userdata.service';
import { NavbarService } from '../navbar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData = [];

  constructor(private myDataService :  UserdataService, public nav: NavbarService) { }

  ngOnInit() {
    this.nav.show();
  this.nav.doSomethingElseUseful();
    this.myDataService.getUserData().subscribe((res:any) => {
      console.log("Response is => ",res);
      this.userData = res.data;
    });
  }

}
