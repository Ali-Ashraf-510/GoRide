// import { Injectable } from '@angular/core';
// import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError, tap } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private loginUrl = 'https://your-api.com/login'; // 🔹 عنوان API لتسجيل الدخول
//   private registerUrl = 'https://your-api.com/register'; // 🔹 عنوان API للتسجيل

//   constructor(private http: HttpClient) {}

//   // 🔹 دالة تسجيل الدخول (من السابق)
//   login(credentials: { email: string; password: string }): Observable<{ token: string; user: any }> {
//     return this.http.post<{ token: string; user: any }>(this.loginUrl, credentials).pipe(
//       tap(response => {
//         localStorage.setItem('token', response.token);
//         localStorage.setItem('user', JSON.stringify(response.user));
//       }),
//       catchError(this.handleError)
//     );
//   }

//   // 🔹 دالة التسجيل (جديدة)
//   register(data: { fullName: string; email: string; password: string }): Observable<{ message: string }> {
//     return this.http.post<{ message: string }>(this.registerUrl, data).pipe(
//       catchError(this.handleError)
//     );
//   }

//   // 🔹 التحقق من حالة تسجيل الدخول
//   isLoggedIn(): boolean {
//     return !!localStorage.getItem('token');
//   }

//   // 🔹 الحصول على الـ token
//   getToken(): string | null {
//     return localStorage.getItem('token');
//   }

//   // 🔹 الحصول على بيانات المستخدم
//   getUser(): any {
//     const user = localStorage.getItem('user');
//     return user ? JSON.parse(user) : null;
//   }

//   // 🔹 تسجيل الخروج
//   logout(): void {
//     localStorage.removeItem('token');
//     localStorage.removeItem('user');
//   }

//   // 🔹 التعامل مع الأخطاء
//   private handleError(error: HttpErrorResponse): Observable<never> {
//     let errorMessage = 'An unexpected error occurred.';
//     if (error.status === 400) {
//       errorMessage = 'Invalid data provided.';
//     } else if (error.status === 401) {
//       errorMessage = 'Invalid email or password.';
//     } else if (error.status === 409) {
//       errorMessage = 'Email already exists.';
//     } else if (error.status === 0) {
//       errorMessage = 'Network error. Please check your connection.';
//     } else if (error.error instanceof ErrorEvent) {
//       errorMessage = `Client-side error: ${error.error.message}`;
//     } else {
//       errorMessage = `Server error: ${error.status} - ${error.message}`;
//     }
//     return throwError(() => new Error(errorMessage));
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = 'https://dummyjson.com/carts';

  constructor(private http: HttpClient) {}

  getCarts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}