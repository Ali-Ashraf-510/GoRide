import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allCars: any[] = []; // قائمة بجميع السيارات
  suggestedCars: any[] = []; // قائمة بالسيارات المقترحة

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchCars();
  }

  fetchCars(): void {
    this.http.get<any[]>('https://your-api.com/cars').subscribe(
      (data) => {
        this.allCars = data; // تخزين جميع السيارات
        this.suggestedCars = this.getSuggestedCars(data); // اختيار السيارات المقترحة
      },
      (error) => {
        console.error('❌ Error fetching cars:', error);
      }
    );
  }

  getSuggestedCars(cars: any[]): any[] {
    // افتراضياً، نأخذ أول 5 سيارات كاقتراحات
    return cars.slice(0, 5);
  }
}