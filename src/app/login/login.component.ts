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

    // 🔹 استرجاع بيانات المستخدم المسجلة من localStorage
    const storedUser = localStorage.getItem('user');
    if (!storedUser) {
      this.errorMessage = 'No account found. Please register first.';
      return;
    }

    const user = JSON.parse(storedUser); // تحويل البيانات من نص إلى كائن

    // 🔹 التحقق من صحة البيانات المدخلة
    if (this.loginForm.value.email === user.email && this.loginForm.value.password === user.password) {
      localStorage.setItem('token', 'fake-jwt-token'); // 🔹 حفظ توكن مصطنع
      this.router.navigate(['/dashboard']); // 🔹 إعادة التوجيه إلى لوحة التحكم
    } else {
      this.errorMessage = 'Invalid email or password. Please try again.';
    }
  }
}
