import { Eleve } from "./eleve";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class StudentInscriptionService {
  URL = "http://localhost:8000/inscription/inscription/";

  constructor(private http: HttpClient) {}

  postEleveInfo(eleve: Eleve) {
    this.http.post(this.URL, eleve).subscribe(data => console.log(data));
  }
}
