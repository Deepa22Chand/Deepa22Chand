import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  getUserData(){
    let url = "http://demo1952080.mockable.io/login";  //get, post, put, delete
    return this.http.get(url);
  }

  // addUser(data){
  //   let url = "http://demo1952080.mockable.io/login";  //get, post, put, delete
  //   return this.http.post(url,data);
  // }


}
