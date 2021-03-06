import { Component, OnInit } from '@angular/core';
 
class Person
{
  nom : string;
  prenom : string;
  email : string;
  motdepasse : string;
  constructor ( nom : string,  prenom : string,  email : string,  motdepasse : string)
  {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.motdepasse = motdepasse;
  }
}

const PersonArray : Person[] = [
  {nom:"", prenom:"",email:"",motdepasse:""},
]

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  tablePerson = PersonArray;
  classgreen : string= '' ;
   resetclass : string= '' ;
  insertPerson : Person ={ nom:"", prenom:"", email:"", motdepasse:""};

  ngOnInit(): void {
  }
  user = { 
    name:"",
    lastname:"",
    email:"",
    password:""
  };
changeGreen() 
   {
       this.classgreen = "bg-green";
    }
  
resetBut(): void 
  {
    this.classgreen ="bg-simple";
 
   this.insertPerson.email = this.user.email;
   this.insertPerson.nom = this.user.name;
   this.insertPerson.prenom = this.user.lastname;
   this.insertPerson.motdepasse = this.user.password;
   this.tablePerson.push(this.insertPerson);
   console.log(this.tablePerson);
   this.insertPerson =  { nom: "", prenom: "", motdepasse: "" ,email:""};
     this.user.email = ' ';
    this.user.name = ' ';
    this.user.lastname = ' ';
    this.user.password = ' '; 
  };
  delete(index:any) {

    this.tablePerson.splice(index, 1);
  };

  constructor() { };
   

}
