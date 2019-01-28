import { Component, OnInit } from '@angular/core';
import { HttpService} from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

newUser = {f_name:"",
l_name:"",
Description:"",
email:"",
address:"",
password:"",}


errorL;
boo:any;
constructor(private _httpService: HttpService,
            private _route: ActivatedRoute,
            private _router: Router)
            {
              this.LoadPage();
            }

  ngOnInit() {
  }
LoadPage(){

}
RegisterForm(){
  let obs = this._httpService.newUser(this.newUser);
  obs.subscribe(data=>{
    if(data['errors']){
      this.errorL = data['errors']
    }
    else{
      this._router.navigate(['/'])
    }
  })
LoginForm(id){
  if(this.email = this.HttpService)
}
Turnon(){
 this.boo = true;
}
}
}
