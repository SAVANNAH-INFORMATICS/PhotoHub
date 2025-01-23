import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, 
    private authService: AuthService,
     private router: Router,
    private snackbar: MatSnackBar) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          console.log(response)
          this.snackbar.open('Login Success!', "X", {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000
          })
          localStorage.setItem('authToken', response.token);
          this.router.navigate(['/dashboard/home']);
        },
        error: (error) => {
          console.error('Login failed', error);
          this.snackbar.open('Invalid email or password. Please try again.', "X", {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000
          })

       //   alert('Invalid email or password. Please try again.');
        },
      });
    }

  }
}
