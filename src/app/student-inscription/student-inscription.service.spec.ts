import { TestBed } from '@angular/core/testing';

import { StudentInscriptionService } from './student-inscription.service';

describe('StudentInscriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudentInscriptionService = TestBed.get(StudentInscriptionService);
    expect(service).toBeTruthy();
  });
});
