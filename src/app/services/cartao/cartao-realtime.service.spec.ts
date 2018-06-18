import { TestBed, inject } from '@angular/core/testing';

import { CartaoRealtimeService } from './cartao-realtime.service';

describe('CartaoRealtimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaoRealtimeService]
    });
  });

  it('should be created', inject([CartaoRealtimeService], (service: CartaoRealtimeService) => {
    expect(service).toBeTruthy();
  }));
});
