import { TestBed, inject } from '@angular/core/testing';

import { CartaoService } from './cartao.service';

describe('CartaoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartaoService]
    });
  });

  it('should be created', inject([CartaoService], (service: CartaoService) => {
    expect(service).toBeTruthy();
  }));
});
