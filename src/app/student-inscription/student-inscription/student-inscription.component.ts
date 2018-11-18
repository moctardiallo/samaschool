import { Component, OnInit } from "@angular/core";

@Component({
  selector: "student-inscription",
  templateUrl: "./student-inscription.component.html",
  styleUrls: ["./student-inscription.component.css"]
})
export class StudentInscriptionComponent implements OnInit {
  etapes = ["Informations Scolaires"];

  ecoles = ["CEM Medina", "Lycee Delafosse", "Lycee Blaise Diagne"];

  matieres = ["Maths", "Programmation"];

  nom = "";

  prenom = "";

  tel = "";

  quartiers = ["Medina", "Geule Tapee", "Rebeuss"];

  constructor() {}

  ngOnInit() {}

  presentGeneralInformation(info: string): void {
    this.nom = info;
    console.log(this.nom);
  }
}
