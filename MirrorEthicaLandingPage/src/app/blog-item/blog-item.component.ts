import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})

export class BlogItemComponent {

  @Input() identifier: string = "";
  @Input() date: Date = new Date();
  @Input() title: string = "";
  @Input() textContent: string = "";
  @Input() showByDefault: boolean = false;

  constructor()
  {

  }

  getFullHeader(): string
  {
    return this.date.getDate() + " " + this.date.toLocaleString('en-US', { month: 'long' }) + " " + this.date.getFullYear() + " | " + this.title; 
  }

}
