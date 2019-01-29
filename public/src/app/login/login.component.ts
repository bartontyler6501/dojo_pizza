import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

newUser = {firstName:"",
lastName:"",
Description:"",
email:"",
address:"",
password:"",}
two:any;
loading:any;
errorL;
boo:any;
model= {};
constructor(private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router)
            {
            //  this.LoadPage();
            }

  ngOnInit() {
  }
// LoadPage(){

// }
// RegisterForm(){
//   let obs = this._httpService.newUser(this.newUser);
//   obs.subscribe(data=>{
//     if(data['errors']){
//       this.errorL = data['errors']
//     }
//     else{
//       this._router.navigate(['/'])
//     }
//   })
// LoginForm(id){
//   if(this.email = this.HttpService)
// }
Turnon(){
 this.boo = true;
 this.two =false;
}
Turnon1(){
  this.two = true;
  this.boo = false;
 }
register() {
  
  let obs = this._httpService.newUser(this.newUser)
      obs.subscribe( data => {
        console.log("NEWUSER!!!!")
        console.log(data)
              this._router.navigate(['/']);
          },
          error => {
              this._httpService.error(error);
              this._router.navigate(['/']);
          });
}
login(_id) {
  this.loading = true;
  this._httpService.Allusers(this.newUser)
      .subscribe(
          data => {
              this._router.navigate(['/']);
          },
          error => {
              this._httpService.error(error);
              this.loading = false;
          });
}
}

