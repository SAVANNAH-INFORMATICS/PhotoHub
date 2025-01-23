import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  
  const authPassword = localStorage.getItem('authPassword');
  if (authPassword) {
    return true; 
  } else {
    router.navigate(['/authentication/login'], { queryParams: { returnUrl: state.url } });
    return false; 
  }
};
