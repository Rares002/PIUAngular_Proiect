import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { products } from '../products/products';
import { CardContent } from '../products/products.component';
import {CommonModule} from "@angular/common";

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-product-details',
  standalone: true,
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product: CardContent | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const productName = params.get('title');
      this.product = products.find(prod => prod.title === productName);
    });
  }

  getProductDetails(productName: string | null): CardContent | undefined {
    if (!productName) return undefined;
    return products.find(prod => prod.title === productName);
  }

  buyNow(product: CardContent | undefined) {
    if (!product) {
      return;
    }
  }

  addToCart(product: CardContent | undefined) {
    if (!product) {
      return;
    }
  }
}
