/* InMemoryDataService on muistissa oleva "valepalvelin" joka toimii aivan kuin
   oikea palvelin. Sen avulla voidaan keskittyä pelkän frontendin kehittämiseen
   ilman että tarvitaan oikeaa palvelinta. Koodista voidaan tehdä sellaista että
   se toimii heti myös oikean palvelimen kanssa.
*/

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Content } from './content';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    // content-taulukko on "valetietokanta", josta tulee sisältö
    // kolmelle SPA-näkymälle
    const content: Content[] = [
      {
        id: 1,
        name: 'Minä',
        img: 'assets/img/me.jpeg',
        data1: 'Jaakko Nojonen',
        data2: 'Tietojenkäsittelyn opiskelija',
        data3: 'Asuinpaikka Haapaniemi',
      },
      {
        id: 2,
        name: 'Opinnot',
        img: 'assets/img/studies.png',
        data1: 'Elämän koulu',
        data2: 'Peruskoulu',
        data3: 'Jyväskylän AMK',
      },
      {
        id: 3,
        name: 'Harrastukset',
        img: 'assets/img/hobbies.png',
        data1: 'Reserviläistoiminta',
        data2: 'Roolipelit',
        data3: 'Ohjelmointi',
      },
      {
        id: 4,
        name: 'Yhteystiedot',
        img: '',
        data1: 'Puhelinnumero: 0440880191',
        data2: 'Email: ac9194@student.jamk.fi ',
        data3: '',
      },
    ];

    return { content };
  }
}
