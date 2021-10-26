import { Component, OnInit, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  toDo : string ='';
  @Output() sendInput = new EventEmitter ();

  constructor() { }

  ngOnInit(): void {
  }
  sendData(){
    this.sendInput.emit(this.toDo);
  }

}
