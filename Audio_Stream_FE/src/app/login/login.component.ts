import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../Services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
 
  email: string = '';
  password: string = '';
 
  isLogin: boolean = true;
  erroMessage: string = "";
 
  constructor(private router: Router,private authService:AuthService) {}
 
  login() {
    console.log(this.email);
    console.log(this.password);
 
    let bodyData = {
      email: this.email,
      password: this.password,
    };
 
        this.authService.login(bodyData).subscribe(  (resultData: any) => { 
        if (resultData.status)
        {
           this.router.navigateByUrl('/login');
        }
        else
         {
          alert("Incorrect Email or Password");
          console.log("Errror login");
        }
      });
    }
 
}