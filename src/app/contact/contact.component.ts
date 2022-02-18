import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
email:string = "";
name:string ="";
message:string="";
object={};
isShown: boolean = false ;

  constructor() {
  
   }

  ngOnInit() {
    

  }
  submit(){
 
this.isShown = ! this.isShown;
   this.object["name"]=this.name;
     this.object["email"]=this.email;
     this.object["message"]=this.message;

     console.log(this.object);
// Save object in local storage as string
localStorage.setItem("object",JSON.stringify(this.object));
this.name="";
this.email="";
this.message="";
}

}
