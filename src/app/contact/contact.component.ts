import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // إنشاء نموذج الاتصال مع التحقق من الحقول
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log("📩 Form Data:", this.contactForm.value);
      alert('✅ Message sent successfully!');
      this.contactForm.reset();
    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}
