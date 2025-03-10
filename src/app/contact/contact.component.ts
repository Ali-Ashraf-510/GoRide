import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // إرسال البيانات إلى السيرفر عبر API
      this.http.post('https://your-backend-api.com/contact', formData).subscribe(
        response => {
          console.log("📩 Form sent successfully:", response);
          alert('✅ Message sent successfully!');
          this.contactForm.reset();
        },
        error => {
          console.error("❌ Error sending form:", error);
          alert('⚠️ Failed to send the message. Please try again later.');
        }
      );
    } else {
      alert('⚠️ Please fill all required fields correctly.');
    }
  }
}
