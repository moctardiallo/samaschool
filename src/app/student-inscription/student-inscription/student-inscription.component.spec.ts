import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material";
import { MatStepperModule } from "@angular/material";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { StudentInscriptionComponent } from "./student-inscription.component";

fdescribe("StudentInscriptionComponent", () => {
  let component: StudentInscriptionComponent;
  let fixture: ComponentFixture<StudentInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentInscriptionComponent],
      imports: [BrowserAnimationsModule, MatStepperModule, MatSelectModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
