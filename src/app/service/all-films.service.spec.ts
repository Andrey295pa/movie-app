import { TestBed } from '@angular/core/testing';

import { AllFilmsService } from './all-films.service';

describe('AllFilmsService', () => {
  let service: AllFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
