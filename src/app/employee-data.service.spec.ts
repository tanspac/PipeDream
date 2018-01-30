import { TestBed, inject } from '@angular/core/testing';

import { EmployeeDataService } from './employee-data.service';

describe('EmployeeDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeDataService]
    });
  });

  it('should be created', inject([EmployeeDataService], (service: EmployeeDataService) => {
    expect(service).toBeTruthy();
  }));
});
