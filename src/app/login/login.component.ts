import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../navbar.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = "";
  password:string = "";


  userList = [
    {"email":"abc@mail.com", "password":"abc"},
    {"email":"abc@mail1.com", "password":"def"},
    {"email":"abc@mail2.com", "password":"ghi"},
    {"email":"test@mail.com", "password":"test"},
    {"email":"test1@mail.com", "password":"test1"} ,
    {"email":"test2@mail.com", "password":"test2"}  
  ];

  constructor(private router: Router,public nav: NavbarService) { }

  ngOnInit() {
     this.nav.hide();
  this.nav.doSomethingElseUseful();
  }
 check(login_data: { email: any; password?: string; }){
    return login_data.email===this.email && login_data.password===this.password;
  }
  checkLogin(){
    if(
        (this.userList.find(login_data=>this.check(login_data)))
    )
    {   localStorage.setItem("userAccessToken","true");
      console.log("Success");
      this.router.navigateByUrl("home"); //navigation after successfully login
    }
    else{
      console.log("Invalid email/Password");
    }
  }

}
