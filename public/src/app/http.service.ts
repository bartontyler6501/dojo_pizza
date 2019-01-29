import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient){}

  Allusers(newUser: { f_name: string; l_name: string; Description: string; email: string; address: string; password: string; }): any {
    throw new Error("Method not implemented.");
  }
  newUser(newUser)  {
    console.log(newUser)
    console.log("**************added user*****************")
    return this._http.post('/api/Users', newUser);
    
  }
  error(error: any): any {
    throw new Error("Method not implemented.");
  }

 
}
