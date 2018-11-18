import { Component, OnInit } from "@angular/core";

@Component({
  selector: "student-inscription",
  templateUrl: "./student-inscription.component.html",
  styleUrls: ["./student-inscription.component.css"]
})
export class StudentInscriptionComponent implements OnInit {
  ecoles = ["CEM Medina", "Lycee Delafosse", "Lycee Blaise Diagne"];

  classes = ["6eme", "5eme", "4eme", "3eme", "2nd", "1ere", "Terminale"];

  matieres = ["Maths", "Programmation"];

  nom = "";
  prenom = "";
  tel = "";
  quartier = "";
  ecole = "";
  classe = "";
  matiere = "";

  quartiers = ["Medina", "Geule Tapee", "Rebeuss"];

  constructor() {}

  ngOnInit() {}

  getEleveInfo(nom, prenom, tel, quartier, ecole, classe, matiere): void {
    this.nom = nom;
    this.prenom = prenom;
    this.tel = tel;
    this.quartier = quartier;
    this.ecole = ecole;
    this.classe = classe;
    this.matiere = matiere;
  }
}
