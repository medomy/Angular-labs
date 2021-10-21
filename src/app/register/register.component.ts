import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __exportStar } from 'tslib';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  RegestirationForm : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.RegestirationForm = new FormGroup({
      FormalName: new FormControl("",[Validators.required]),
      UserName: new FormControl("",[Validators.required,Validators.pattern("/^[\S]+$/gm")]),
      Emailreg: new FormControl("",[Validators.required,Validators.pattern("^[a-zA-Z0-9.!#$%&’*+\=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]),
      Password: new FormControl("",[Validators.required,Validators.pattern("^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$")]),
      PasswordCheck: new FormControl("",[Validators.required]),
    },
    )
  }
  Register(){
    console.log(this.RegestirationForm);
    
  }

  

}

