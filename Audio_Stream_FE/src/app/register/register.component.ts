import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})
export class RegisterComponent {
 
  firstname: string ="";
  lastname: string ="";
  email: string ="";
  password: string ="";
 
  constructor(private authService:AuthService){}
 
  ngOnInit(): void
  { }
 
  register()
  {
    let bodyData =
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "email" : this.email,
      "password" : this.password,
    };
    this.authService.register(bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("User Registered Successfully")
    });
  }
 
  save()
  {
    this.register();
  }
 
}