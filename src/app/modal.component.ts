import { Component } from "@angular/core";

import { MatDialogRef } from "@angular/material/dialog";

import {MAT_DIALOG_DATA} from '@angular/material';
import { Inject } from '@angular/core';

@Component({
    selector: 'modal-comp',
    template: `
    <div class="container">
        <div><img src="{{data.picUrl}}"></div>
        <footer><button (click)="closeDialog()">Close</button></footer>
    </div>
    `,
    styles: [`
        .container{
            text-align: center;
        }
    `]
})

export class ModDialog{
    constructor(public dialogRef: MatDialogRef<ModDialog>, @Inject(MAT_DIALOG_DATA) public data: any){

    }

    closeDialog(){
        this.dialogRef.close();
    }
}