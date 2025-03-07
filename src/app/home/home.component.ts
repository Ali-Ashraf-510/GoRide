import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cars = [
    { name: 'Tesla Model S', image: 'assets/tesla.jpg' },
    { name: 'BMW M4', image: 'assets/bmw.jpg' },
    { name: 'Audi R8', image: 'assets/audi.jpg' },
  ];

  selectCar(car: any) {
    alert(`You selected: ${car.name}`);
  }
}
