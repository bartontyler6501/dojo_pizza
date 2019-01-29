import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  LoginUser(email: string, password: string): any {
    let pword ={password: password}
    return this._http.post('/api/Users/login/'+ email, pword)
    throw new Error("Method not implemented.");
  }
  constructor(private _http: HttpClient){}


  newUser(newUser)  {
    console.log(newUser)
    console.log("**************added user*****************")
    return this._http.post('/api/Users/', newUser);
    
  }
  error(error: any): any {
    throw new Error("Method not implemented.");
  }

 
}
