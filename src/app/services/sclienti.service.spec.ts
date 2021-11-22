import { TestBed } from '@angular/core/testing';

import { SclientiService } from './sclienti.service';

describe('SclientiService', () => {
  let service: SclientiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SclientiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
