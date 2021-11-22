import { TestBed } from '@angular/core/testing';

import { SfattureService } from './sfatture.service';

describe('SfattureService', () => {
  let service: SfattureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfattureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
