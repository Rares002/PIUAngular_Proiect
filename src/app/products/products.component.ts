import { Component } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from "@angular/material/button";
import { products } from './products';
import {Router, RouterModule} from "@angular/router";


export type CardContent = {
  title: string;
  description: string;
  imageUrl: string;
};

@Component({
  imports: [CommonModule, MatCardModule, MatToolbarModule, MatButtonModule, RouterModule],
  selector: 'app-products',
  standalone: true,
  styleUrls: ['./products.component.css'],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  cards: CardContent[] = [];
  images = [
  ];

  constructor(private router: Router) {
    const cardContents = products;

    this.cards = this.generateCards(cardContents);
  }
  goToProductDetails(title: string) {
    this.router.navigate(['product', title]);
  }


  generateCards(cardContents: CardContent[]): CardContent[] {
    return cardContents.map((content, index) => ({
      title: content.title || `Card ${index + 1}`,
      description: content.description || `Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.`,
      imageUrl: content.imageUrl || `https://source.unsplash.com/random/500X500?${this.images[index]}`,
    }));
  }
}
