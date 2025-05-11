import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-flip-card',
  imports: [],
  templateUrl: './flip-card.component.html',
  styleUrl: './flip-card.component.css'
})
export class FlipCardComponent 
{
  style: string;
  @Input() width: string = "300px";
  @Input() height: string = "300px";
  @Input() imgSrc: string = "";

  constructor()
  {
    this.style = "";
  }

  handleClick()
  {
    if (this.style == "")
    {
      this.style = "transform: rotateY(180deg);"
    }
    else
    {
      this.style = "";
    }
  }
}
