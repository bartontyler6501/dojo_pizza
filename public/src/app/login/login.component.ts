import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


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
loading = false;
errorL;
boo:any;
model= {};
USER =  {email: "",
  password: ""

}
message:any;
constructor(private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router,) { }


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
login() {
  this.loading = true;
  let obs = this._httpService.LoginUser(this.USER.email, this.USER.password)
      obs.subscribe(
          data => {
              if(data != null){
                this._router.navigate([['/']]);
                console.log("Im logged in")
                console.log("This user is logged in" , data)
              }
              else{
                console.log("you are not a user")
              }
        },
              
          error => {
            this.message =  this._httpService.error(error);
              this.loading = false;
          });
}
}
