import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule, } from '@angular/material/dialog';
import { ConfirmDialogComponent } from './components/confirm-dialog.component';

import {
  MatButtonModule
} from "@angular/material";
@NgModule({
  declarations: [ConfirmDialogComponent],
  imports: [
    MatDialogModule,
    CommonModule,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    ConfirmDialogComponent,
    MatButtonModule
  ]
})
export class ConfirmDialogModule { }
