import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover: string = "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/7F51FA9F6CBD9F0C9B1394B1CC0A6A842D07091318674E234CD33CBF7C28CDC3/scale?width=1200&aspectRatio=1.78&format=jpeg"
  cardTitle: string = "NOVO HOMEM DE FERRO ANUNCIADO"
  cardDescription: string = "Marvel Studios anuncia novo filme do homem de ferro."
  constructor() { }

  ngOnInit(): void {
  }

}
