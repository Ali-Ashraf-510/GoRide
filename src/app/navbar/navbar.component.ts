import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  userName: string | null = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkLoginStatus();
  }

  checkLoginStatus() {
    const user = localStorage.getItem('user');
    if (user) {
      this.isLoggedIn = true;
      this.userName = JSON.parse(user).fullName;
    } else {
      this.isLoggedIn = false;
      this.userName = null;
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.userName = null;
    this.router.navigate(['/login']); // إعادة التوجيه إلى صفحة تسجيل الدخول
  }
}
