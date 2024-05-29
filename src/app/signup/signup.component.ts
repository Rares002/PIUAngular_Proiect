import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';
  termsAccepted: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  signup() {
    if (this.authService.signup(this.username, this.password)) {
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'User already exists';
    }
    if (this.termsAccepted) {
      console.log('Form submitted successfully.');
    } else {
      this.errorMessage = 'You must accept the terms and conditions to sign up.';
    }
  }
}
