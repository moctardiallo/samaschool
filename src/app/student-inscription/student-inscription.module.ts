import {
  MatButtonModule,
  MatInputModule,
  MatOptionModule,
  MatSelectModule,
  MatStepperModule
} from "@angular/material";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StudentInscriptionComponent } from "./student-inscription/student-inscription.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule
  ],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule {}
