import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule, MatMenuModule, MatSidenavModule, MatToolbarModule],
  declarations: [],
  exports: [MatMenuModule, MatSidenavModule, MatToolbarModule]
})
export class MatNavigationModule {}
