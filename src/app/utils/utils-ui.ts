import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmDialogComponent } from '../confirm-dialog/components/confirm-dialog.component'

@Injectable()
export class UtilsUI {

    constructor(private dialog: MatDialog) { }

    confirm(message: string, action: string, cb: () => any): void {

        let dialogRef = this.dialog.open(ConfirmDialogComponent, {
            width: '40%',
            hasBackdrop: true,
            disableClose: true,
            data: {
                message: message,
                action: action ? action : ''
            }
        });

        dialogRef.beforeClose().subscribe(result => {
            
            if (result && result != "cancel") {
                cb();
            }
        })
    }
}