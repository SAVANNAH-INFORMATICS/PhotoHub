import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  passwordMismatch = false;

  constructor(
    private fb: FormBuilder, 
    private snackbar: MatSnackBar,
    private authService: AuthService, 
    private router: Router) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: this.passwordMatchValidator,
      }
    );
  }

  // Password match validator
  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;
      this.authService.register(name, email, password).subscribe({
        next: (response) => {
          this.snackbar.open(response.message, "X", {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3000
          })
          this.router.navigate(['/authentication/login']);
        },
        error: (error) => {
          console.error('Registration failed', error);
          alert('There was an error during registration. Please try again.');
        },
      });
    }
  }

  get formControls() {
    return this.registerForm.controls;
  }
}
