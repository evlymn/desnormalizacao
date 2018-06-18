import { Injectable } from '@angular/core';
import { UsuarioRealtimeService } from '@services/usuario/usuario-realtime.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor(public realtime: UsuarioRealtimeService) {}
}
