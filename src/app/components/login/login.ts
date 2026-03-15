import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginModelObj: LoginModel = new LoginModel();
  router = inject(Router);
  http = inject(HttpClient);
  loginUser() {
    //Hard code login validation
    /*if (this.loginModelObj.emailId == 's@r.com' && this.loginModelObj.password == '1234') {
      //this.router.navigate(['/home']);
      this.router.navigateByUrl('/home');
    } else {
      alert('Login Failed');
    }*/
    //TODO: create user on REST API and validate login using API
    this.http
      .post('https://api.freeprojectapi.com/api/UserApp/login', this.loginModelObj)
      .subscribe({
        next: (response: any) => {
          debugger;
          localStorage.setItem('loginUserId', response.data.userId);
          this.router.navigateByUrl('/home');
        },
        error: (response: any) => {
          alert('Login Failed');
        },
      });
  }
}

class LoginModel {
  emailId: string;
  password: string;
  constructor() {
    this.emailId = '';
    this.password = '';
  }
}
