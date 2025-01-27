import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private snackbar: MatSnackBar,
    private ngLoader: NgxUiLoaderService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void { }
  onSubmit() {
    this.ngLoader.start();
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
      const { email, password } = this.loginForm.value;
      this.authService.login(email, password).subscribe({
        next: (response) => {
          this.ngLoader.stop();
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
          this.ngLoader.stop();
          console.error('Login failed', error);
          this.snackbar.open('Invalid email or password. Please try again.', "X", {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000
          })
        },
      });
    }

  }
}
