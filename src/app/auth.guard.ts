import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = !!localStorage.getItem('user'); // Simulating user authentication

    if (!isAuthenticated) {
      alert('❌ Access Denied! Please log in.');
      this.router.navigate(['/login']); // Redirect to login page
      return false;
    }

    return true;
  }
}
