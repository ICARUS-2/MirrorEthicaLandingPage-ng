import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  imports: [RouterLink, NgbCarousel, NgbAlert],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
