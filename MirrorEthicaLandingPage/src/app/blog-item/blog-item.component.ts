import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-item',
  imports: [],
  templateUrl: './blog-item.component.html',
  styleUrl: './blog-item.component.css'
})

export class BlogItemComponent {

  @Input() id: string = "";
  @Input() date: Date = new Date();
  @Input() title: string = "";
  @Input() textContent: string = "";

  constructor()
  {

  }

  getFullHeader(): string
  {
    return this.date.getDay() + " " + this.date.toLocaleString('en-US', { month: 'long' }) + " " + this.date.getFullYear() + " | " + this.title; 
  }
}
