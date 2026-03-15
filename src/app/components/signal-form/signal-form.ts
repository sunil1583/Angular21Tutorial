import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { form, FormField, required, email } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form',
  imports: [JsonPipe, FormField],
  templateUrl: './signal-form.html',
  styleUrl: './signal-form.css',
})
export class SignalForm {
  //loginModel = signal({ email: '', password: '' });
  //loginForm = form(this.loginModel);

  loginModel = signal({
    email: '',
    password: '',
    rememberMe: false,
  });
  //loginForm = form(this.loginModel);
  loginForm = form(this.loginModel, (fieldPath) => {
    required(fieldPath.email, { message: 'Email is required' });
    email(fieldPath.email, { message: 'Enter a valid email address' });
  });
}
interface LoginData {
  email: string;
  password: string;
  rememberMe: boolean;
}
