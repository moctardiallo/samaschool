import { FlexLayoutModule } from "@angular/flex-layout";
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
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [StudentInscriptionComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatStepperModule
  ],
  exports: [StudentInscriptionComponent]
})
export class StudentInscriptionModule {}
