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
  loading: boolean = false; // ⏳ محاكاة تحميل البيانات عند تسجيل الدخول

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.errorMessage = '⚠️ Please enter a valid email and password.';
      return;
    }

    this.loading = true; // بدء تحميل البيانات

    // 🔹 محاكاة استدعاء API للتحقق من بيانات المستخدم
    setTimeout(() => {
      const fakeUser = {
        email: 'test@example.com',
        password: '123456',
        name: 'John Doe'
      };

      if (
        this.loginForm.value.email === fakeUser.email &&
        this.loginForm.value.password === fakeUser.password
      ) {
        // ✅ حفظ بيانات المستخدم في localStorage
        localStorage.setItem('token', 'fake-jwt-token');
        localStorage.setItem('user', JSON.stringify(fakeUser));

        // 🔹 إعادة توجيه المستخدم بعد تسجيل الدخول الناجح
        this.router.navigate(['/dashboard']);
      } else {
        this.errorMessage = '❌ Invalid email or password. Please try again.';
        this.loading = false; // إيقاف التحميل
      }
    }, 1500); // ⏳ تأخير 1.5 ثانية لمحاكاة استجابة API
  }
}
