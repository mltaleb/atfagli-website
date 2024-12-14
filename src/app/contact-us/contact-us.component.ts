import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="contact-us">
      <h2>Contact Us</h2>
      <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
        <div class="mb-3">
          <label for="name">Name</label>
          <input
            id="name"
            type="text"
            class="form-control"
            formControlName="name"
          />
          <div
            *ngIf="
              contactForm.get('name')?.invalid &&
              contactForm.get('name')?.touched
            "
            class="text-danger"
          >
            Name is required.
          </div>
        </div>

        <div class="mb-3">
          <label for="email">Email</label>
          <input
            id="email"
            type="email"
            class="form-control"
            formControlName="email"
          />
          <div
            *ngIf="
              contactForm.get('email')?.invalid &&
              contactForm.get('email')?.touched
            "
            class="text-danger"
          >
            Enter a valid email.
          </div>
        </div>

        <div class="mb-3">
          <label for="message">Message</label>
          <textarea
            id="message"
            rows="4"
            class="form-control"
            formControlName="message"
          ></textarea>
          <div
            *ngIf="
              contactForm.get('message')?.invalid &&
              contactForm.get('message')?.touched
            "
            class="text-danger"
          >
            Message is required.
          </div>
        </div>

        <button type="submit" class="btn btn-primary">
          [disabled]="contactForm.invalid || isSubmitting"
          {{ isSubmitting ? 'Sending...' : 'Send' }}
        </button>
      </form>
      <div *ngIf="successMessage" class="alert alert-success mt-3">
        {{ successMessage }}
      </div>
    </div>
  `,
  styles: [
    `
      .contact-us {
        padding: 20px;
        max-width: 600px;
        margin: auto;
      }

      .btn {
        background-color: #4b39ef;
        border: none;
        color: white;
        padding: 10px 15px;
        cursor: pointer;
      }

      .btn:hover {
        background-color: #39d2c0;
      }
    `,
  ],
})
export class ContactUsComponent {
  contactForm: FormGroup;
  successMessage: string | null = null;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }
  isSubmitting = false;

  async onSubmit() {
    if (this.contactForm.valid) {
      if (this.contactForm.valid) {
        const contactData = {
          name: this.contactForm.value.name,
          email: this.contactForm.value.email,
          message: this.contactForm.value.message,
        };
        this.isSubmitting = true;
        try {
          const contactsCollection = collection(this.firestore, 'contactus');
          await addDoc(contactsCollection, contactData);
          this.successMessage = 'Your message has been sent successfully!';
          this.contactForm.reset();
        } catch (error) {
          console.error('Error sending message: ', error);
          this.successMessage = 'An error occurred. Please try again later.';
        } finally {
          this.isSubmitting = false;
        }

        setTimeout(() => (this.successMessage = null), 5000);
      }
    }
  }
}
