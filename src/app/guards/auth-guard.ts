import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  const loginUserId = localStorage.getItem('loginUserId');
  if (loginUserId == null) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
