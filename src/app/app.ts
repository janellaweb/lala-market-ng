import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Product } from './market/product';
import { ProductCard } from './market/product-card/product-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, ProductCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'lala-market-ng';

product: Product = {

    id: 1,
    price: 9.99,
    name: 'Test Product',
    description: 'This is a test product.',
    image: 'sample-product.jpg'
  };

}