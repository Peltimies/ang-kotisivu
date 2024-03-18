import { Component, OnInit } from '@angular/core';
import { Content } from '../content';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})

// onInit on angulaarin rajapintaluokka
//siellä olevat metodit toteutetaan
export class NavbarComponent implements OnInit {
  // tänne tuodaan sisältö valetietokannasta
  content: Content[] | undefined;

  constructor(private cservice: ContentService) {}

  // hajetaan cservicellä contentit tänne
  ngOnInit() {
    // haetaan content palvelimelta. Se tulee content-muuttujassa
    // tässä käytetään cservicen getContenttia joka palauttaa promisella content taulukon
    // tulee sisään content muuttujassa ja avaa observablen subscribe-metodilla

    this.cservice.getContent().subscribe((content) => (this.content = content));
  }
}
