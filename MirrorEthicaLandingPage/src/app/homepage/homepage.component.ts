import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { FlipCardComponent } from "../flip-card/flip-card.component";
import { AboutComponent } from "../about/about.component";

@Component({
  selector: 'app-homepage',
  imports: [RouterLink, AboutComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

  constructor(private title: Title)
  {
    title.setTitle("Homepage")
  }
}
