import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { Eleve } from "../eleve";

@Component({
  selector: "student-inscription",
  templateUrl: "./student-inscription.component.html",
  styleUrls: ["./student-inscription.component.css"]
})
export class StudentInscriptionComponent implements OnInit {
  ecoles = ["CEM Medina", "Lycee Delafosse", "Lycee Blaise Diagne"];

  classes = ["6eme", "5eme", "4eme", "3eme", "2nd", "1ere", "Terminale"];

  matieres = ["Maths", "Programmation"];

  eleve: Eleve;

  quartiers = ["Medina", "Geule Tapee", "Rebeuss"];

  firstFormGroup: FormGroup;
  secondtFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  constructor() {}

  ngOnInit() {}

  getEleveInfo(nom, prenom, tel, quartier, ecole, classe, matiere): void {
    this.eleve = {
      nom,
      prenom,
      tel,
      quartier,
      ecole,
      classe,
      matiere
    };
    console.log(this.eleve);
  }
}
