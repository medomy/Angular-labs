import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  
  skills : Array<{name : string , rate : number}> = [{
    name : "HTML",
    rate : 80
  },{
    name : "CSS",
    rate : 70
  },{
    name : "JS",
    rate : 85
  },{
    name : "Angular.JS",
    rate : 75
  },{
    name : "React.js",
    rate : 50
  },{
    name : "Flutter",
    rate : 40
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
