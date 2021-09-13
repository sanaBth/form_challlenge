import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  user={
    name:"",
    lastname:"",
    email:"",
    password:""
  };

  
  constructor() { }
   classgreen : string= '' ;
 
   changeGreen() {
    this.classgreen = "bg-green";
  }
 
  ngOnInit(): void {
  }

}
