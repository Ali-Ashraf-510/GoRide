import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  brands = [
    { name: 'Audi', image: 'https://via.placeholder.com/100' },
    { name: 'BMW', image: 'https://via.placeholder.com/100' },
    { name: 'Ford', image: 'https://via.placeholder.com/100' },
    { name: 'Mercedes Benz', image: 'https://via.placeholder.com/100' },
    { name: 'Peugeot', image: 'https://via.placeholder.com/100' },
    { name: 'Volkswagen', image: 'https://via.placeholder.com/100' }
  ];

  vehicles = [
    { title: 'Ford Transit - 2021', details: '2.0L Powerstroke, 250 Miles, Diesel, Manual', price: '$22,000', image: 'https://via.placeholder.com/300x200' },
    { title: 'New GLC - 2023', details: '4.0L Powerstroke, 50 Miles, Petrol, Automatic', price: '$85,000', image: 'https://via.placeholder.com/300x200' },
    { title: 'Audi A6 - Newer', details: '3.0L Powerstroke, 100 Miles, Petrol, Automatic', price: '$80,000', image: 'https://via.placeholder.com/300x200' },
    { title: 'Corolla Altis - 2023', details: '1.8L Powerstroke, 1500 Miles, Petrol, CVT', price: '$45,000', image: 'https://via.placeholder.com/300x200' }
  ];
}