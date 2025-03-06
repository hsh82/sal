// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const token = localStorage.getItem('accessToken');
    if (token) {
      return true; // اجازه دسترسی به صفحه
    } else {
      this.router.navigate(['/login']); // انتقال به صفحه لاگین
      return false; // جلوگیری از دسترسی
    }
  }
}