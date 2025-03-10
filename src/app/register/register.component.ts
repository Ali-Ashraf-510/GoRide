import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.errorMessage = 'Please fill out all fields correctly.';
      return;
    }

    if (this.registerForm.value.password !== this.registerForm.value.confirmPassword) {
      this.errorMessage = 'Passwords do not match!';
      return;
    }

    // 🔹 محاكاة تسجيل المستخدم (بدون API)
    const newUser = {
      fullName: this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password
    };

    // ✅ حفظ بيانات المستخدم في localStorage كأنه تم تسجيله
    localStorage.setItem('user', JSON.stringify(newUser));

    // 🔹 عرض رسالة نجاح وإعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    this.successMessage = 'Registration successful! Redirecting...';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
