import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  imports: [CommonModule, MatPaginatorModule, MatSortModule, MatTableModule],
  declarations: [],
  exports: [MatPaginatorModule, MatSortModule, MatTableModule]
})
export class MatDataTableModule {}
