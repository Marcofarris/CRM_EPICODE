import { TestBed } from '@angular/core/testing';

import { SsedeService } from './ssede.service';

describe('SsedeService', () => {
  let service: SsedeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SsedeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
