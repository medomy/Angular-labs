import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards : Array<{class : string , color : string}> = [
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : ""
    },
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : "dark"
    },
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : ""
    },
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : "dark"
    },
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : ""
    },
    {
      class : "custom-card mx-3 mb-3 mt-3" ,
      color : "dark"
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
