import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  recievedTodos : Array<string> =[];

  constructor() { }

  ngOnInit(): void {
  }
  recieveInput($event : string){
    this.recievedTodos.push($event);
    console.log(this.recievedTodos);
  }

}
