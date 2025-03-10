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
  profilePicUrl: string | ArrayBuffer | null = null;

  governorates: string[] = ['Cairo', 'Giza', 'Alexandria', 'Dakahlia', 'Mansoura'];
  cities: string[] = ['6th of October', 'Nasr City', 'Heliopolis', 'Maadi', 'Zamalek'];

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      dob: ['', Validators.required],
      nationalId: ['', [Validators.required, Validators.minLength(14), Validators.maxLength(14)]],
      governorate: ['', Validators.required],
      city: ['', Validators.required],
      profilePic: [null, Validators.required]
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.profilePicUrl = reader.result;
      };
      reader.readAsDataURL(file);
      this.registerForm.patchValue({ profilePic: file });
    }
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

    // 🔹 حفظ بيانات المستخدم في LocalStorage
    const newUser = {
      fullName: this.registerForm.value.fullName,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      dob: this.registerForm.value.dob,
      nationalId: this.registerForm.value.nationalId,
      governorate: this.registerForm.value.governorate,
      city: this.registerForm.value.city,
      profilePic: this.profilePicUrl
    };

    localStorage.setItem('user', JSON.stringify(newUser));

    // 🔹 عرض رسالة نجاح وإعادة توجيه المستخدم إلى صفحة تسجيل الدخول
    this.successMessage = 'Registration successful! Redirecting...';
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
