import { TestBed, inject } from '@angular/core/testing';

import { UsuarioRealtimeService } from './usuario-realtime.service';

describe('UsuarioRealtimeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsuarioRealtimeService]
    });
  });

  it('should be created', inject([UsuarioRealtimeService], (service: UsuarioRealtimeService) => {
    expect(service).toBeTruthy();
  }));
});
