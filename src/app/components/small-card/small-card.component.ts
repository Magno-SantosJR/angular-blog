import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  linkExternoSmall:string = ""
  @Input()
  photoSmallCard: string = ""
  @Input()
  sCardTitle: string = ""
  @Input()
  sCardDescriprition: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
