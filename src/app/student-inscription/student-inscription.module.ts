import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentInscriptionComponent } from "./student-inscription/student-inscription.component";

@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [CommonModule],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule {}
