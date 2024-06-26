import { TestBed } from '@angular/core/testing';

import { UserFilmsService } from './user-films.service';

describe('UserFilmsService', () => {
  let service: UserFilmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserFilmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
