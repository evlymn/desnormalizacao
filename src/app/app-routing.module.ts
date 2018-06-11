import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RealtimeComponent } from './realtime/realtime.component';

const routes: Routes = [{ path: '', component: LoginComponent },
{ path: 'realtime', component: RealtimeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
