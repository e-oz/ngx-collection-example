import { Injectable } from '@angular/core';
import { map, Observable, timer } from 'rxjs';
import { Painting } from '../models/painting';

@Injectable({ providedIn: 'root' })
export class PaintingsService {
  ratePainting(painting: Painting, rate: number): Observable<Painting> {
    return timer(2000).pipe(
      map(() => ({
        ...painting,
        rate,
      }))
    );
  }

  getPaintings(): Observable<Painting[]> {
    return timer(1000).pipe(
      map(() =>
        [
          {
            url: './assets/1.jpg',
            title: 'A Walk at Twilight',
            artist: 'Vincent van Gogh',
            date: '1889-1890',
          },
          {
            url: './assets/2.jpg',
            title: 'Cosiendo la Vela',
            artist: 'Joaquín Sorolla',
            date: '1896',
          },
          {
            url: './assets/3.jpg',
            title: 'High Tide in Evening Light',
            artist: 'Félix Vallotton',
            date: '1915',
          },
          {
            url: './assets/4.jpg',
            title: 'Dog with a Biscuit and a Chinese Cup',
            artist: 'Giovanna Garzoni',
            date: '1640s',
          },
          {
            url: './assets/5.jpg',
            title: 'Vase of Flowers',
            artist: 'Odilon Redon',
            date: '1916',
          },
          {
            url: './assets/6.jpg',
            title: 'Two Ballerinas',
            artist: 'Pierre Carrier-Belleuse',
            date: '1893',
          },
          {
            url: './assets/7.jpg',
            title: 'Mouse',
            artist: 'Shibata Zeshin',
            date: '19th century',
          },
          {
            url: './assets/8.jpg',
            title: 'Sea and Sky',
            artist: 'Rafael Martínez Padilla',
            date: '1907',
          },
          {
            url: './assets/9.jpg',
            title: 'The Czarny Staw Tarn – Blizzard',
            artist: 'Stanisław Witkiewicz',
            date: '1892',
          },
          {
            url: './assets/10.jpg',
            title: 'Portrait of Vincent van Gogh',
            artist: 'Henri de Toulouse-Lautrec',
            date: '1887',
          },
          {
            url: './assets/11.jpg',
            title: 'Flowering Plants',
            artist: 'Hermania Neergaard',
            date: '1845',
          },
          {
            url: './assets/12.jpg',
            title: 'Road with Cypress and Star',
            artist: 'Vincent van Gogh',
            date: '1890',
          },
          {
            url: './assets/13.jpg',
            title: 'Tableau no. 1',
            artist: 'Piet Mondrian',
            date: '1913',
          },
          {
            url: './assets/14.jpg',
            title: 'Patch of Grass',
            artist: 'Vincent van Gogh',
            date: '1887',
          },
          {
            url: './assets/15.jpg',
            title: 'Bridge at Arles (Pont de Langlois)',
            artist: 'Vincent van Gogh',
            date: 'mid-march 1888',
          },
          {
            url: './assets/16.jpg',
            title: 'Afterglow',
            artist: 'Jonas Lie',
            date: 'c. 1913',
          },
          {
            url: './assets/17.jpg',
            title: 'Red Chrysanthemum on Blue Background',
            artist: 'Piet Mondrian',
            date: 'c. 1909-1910',
          },
          {
            url: './assets/18.jpg',
            title: 'Waterlilies or The Water Lily Pond (Nympheas)',
            artist: 'Claude Monet',
            date: '1904',
          },
          {
            url: './assets/19.jpg',
            title: 'The Call',
            artist: 'Witold Wojtkiewicz',
            date: '1908',
          },
          {
            url: './assets/20.jpg',
            title: 'Three Fishing Boats',
            artist: 'Claude Monet',
            date: '1886',
          },
          {
            url: './assets/21.jpg',
            title: 'Feminine Wave',
            artist: 'Katsushika Hokusai',
            date: '1845',
          },
          {
            url: './assets/22.jpg',
            title: 'Self-Portrait',
            artist: 'Marie-Gabrielle Capet',
            date: '1783',
          },
          {
            url: './assets/23.jpg',
            title: 'In The Northland',
            artist: 'Tom Thomson',
            date: '1915',
          },
          {
            url: './assets/24.jpg',
            title: 'Ongoku',
            artist: 'Chigusa Kitani',
            date: '1918',
          },
          {
            url: './assets/25.jpg',
            title: 'A Vaccination',
            artist: 'Anna Ancher',
            date: '1899',
          },
          {
            url: './assets/26.jpg',
            title: 'The Stevedores in Arles',
            artist: 'Vincent van Gogh',
            date: '1888',
          },
          {
            url: './assets/27.jpg',
            title: 'Landscape near Montfoort',
            artist: 'Leo Gestel',
            date: 'summer 1909',
          },
          {
            url: './assets/28.jpg',
            title: 'Sunflower',
            artist: 'Gustav Klimt',
            date: '1907',
          },
          {
            url: './assets/29.jpg',
            title: 'The Good Shepherd',
            artist: 'Henry Ossawa Tanner',
            date: '1902/1903',
          },
          {
            url: './assets/30.jpg',
            title: 'The Kiss',
            artist: 'Gustav Klimt',
            date: '1908',
          },
          {
            url: './assets/31.jpg',
            title: 'Place des Lices, St. Tropez',
            artist: 'Paul Signac',
            date: '1893',
          },
          {
            url: './assets/32.jpg',
            title: 'Rum Row',
            artist: 'Frederick Judd Waugh',
            date: '1922',
          },
        ]
          .map((value) => ({ value, sort: Math.random() }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ value }) => value)
      )
    );
  }
}
