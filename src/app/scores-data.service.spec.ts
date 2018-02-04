import { TestBed, inject } from '@angular/core/testing';

import { ScoresDataService } from './scores-data.service';

describe('EmployeeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoresDataService]
    });
  });

  it('should be created', inject([ScoresDataService], (service: ScoresDataService) => {
    expect(service).toBeTruthy();
  }));
});
