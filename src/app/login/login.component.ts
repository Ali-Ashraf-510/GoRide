import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Please enter a valid email and password.';
      return;
    }

    // 🔹 محاكاة التحقق من بيانات المستخدم
    const fakeUser = {
      email: 'test@example.com',
      password: '123456',
      name: 'John Doe'
    };

    if (
      this.loginForm.value.email === fakeUser.email &&
      this.loginForm.value.password === fakeUser.password
    ) {
      // ✅ حفظ بيانات المستخدم في localStorage (بدلًا من API)
      localStorage.setItem('token', 'fake-jwt-token');
      localStorage.setItem('user', JSON.stringify(fakeUser));

      // 🔹 إعادة التوجيه إلى الصفحة الرئيسية أو لوحة التحكم
      this.router.navigate(['/dashboard']);
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
