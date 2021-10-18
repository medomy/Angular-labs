import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  name : string = "Mohamed Salah";
  title : string = "Developer";

  constructor() { }

  ngOnInit(): void {
  }

}
