import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { FlipCardComponent } from "../flip-card/flip-card.component";

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgbCarousel, FlipCardComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
