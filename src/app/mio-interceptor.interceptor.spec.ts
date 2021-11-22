import { TestBed } from '@angular/core/testing';

import { MioInterceptorInterceptor } from './mio-interceptor.interceptor';

describe('MioInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MioInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MioInterceptorInterceptor = TestBed.inject(MioInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
