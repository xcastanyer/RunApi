import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
  action: string = "";
  message: string = "";

  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    this.action = data.action;
    this.message = data.message;
    console.log(data);
  }

  confirm(): void {
    this.dialogRef.close("confirm");
  }

  cancel() {
    this.dialogRef.close("cancel");
  }
}
