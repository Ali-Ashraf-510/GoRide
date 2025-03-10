import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  featuredCars = [
    { id: 1, name: 'Tesla Model S', price: '$120 / Day', image: 'assets/tesla-model-s.jpg' },
    { id: 2, name: 'BMW M4', price: '$95 / Day', image: 'assets/bmw-m4.jpg' }
  ];

  cars = [
    { id: 3, name: 'Tesla Model S', price: '$120 / Day', image: 'assets/tesla-model-s.jpg' },
    { id: 4, name: 'BMW M4', price: '$95 / Day', image: 'assets/bmw-m4.jpg' },
    { id: 5, name: 'Audi R8', price: '$150 / Day', image: 'assets/audi-r8.jpg' },
    { id: 6, name: 'Mercedes E-Class', price: '$100 / Day', image: 'assets/mercedes-eclass.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  selectCar(car: any) {
    this.router.navigate(['/car-details', car.id]);
  }

  viewDetails(car: any) {
    this.router.navigate(['/car-details', car.id]);
  }
}