import { MatButtonModule } from "@angular/material/button";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentInscriptionComponent } from "./student-inscription/student-inscription.component";

@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [CommonModule, MatButtonModule],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule {}
