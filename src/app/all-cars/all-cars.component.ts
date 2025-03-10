import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.css']
})
export class AllCarsComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.fetchCarts();
  }

  fetchCarts(): void {
    this.cartService.getCarts().subscribe(
      response => {
        console.log("Response from API:", response);
        this.carts = response.carts || []; 
      },
      error => {
        console.error("Error fetching carts:", error);
      }
    );
  }
}
