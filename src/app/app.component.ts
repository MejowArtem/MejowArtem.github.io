import { Component } from '@angular/core';
import { DataService } from "./data.service";
import { HttpService } from './http.service';
import { ModDialog } from './modal.component';
import { MatDialog } from '@angular/material';

import {Data} from "./data";

@Component({
    selector: 'my-app', 
    template: `
    <div class="container">
    <div>
        Show album number(to drop filter select 0): 
        <select [(ngModel)]="albumChoice">
            <option value="0">0</option>
            <option *ngFor="let item of items | AlbumIdFilter">{{item}}</option>
        </select>
    </div>   
            <table>
                <thead>
                </thead>
                <tbody>
                    <tr class ="flex-container" >
                        <td *ngFor="let item of (items| AlbumFilter:albumChoice) | paginate: {
                            itemsPerPage: 40,
                            currentPage: page
                        }" >
                            <img src="{{item.thumbnailUrl}}" (click)="OpenDialog(item.url)">
                            <br>
                            <button (click)="DeleteItem($event,item.id)">Удалить картинку</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="pagination">
                <pagination-controls (pageChange)="onPageChange($event)"></pagination-controls>
            </div>
    </div>`,
    providers: [DataService,HttpService],
    styles:[`
.container{
    padding: 5px;
    text-align: center;
}
.flex-container{
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
    align-items:stretch;
}
.pagination{
    clear:both;
    position:relative;
    text-align:center;
}
th, td{
    text-align: center;
    text-transform: uppercase;
    padding: 5px;    
}
button{
    text-allign: center;
    text-transform: lowercase;
    margin: 0 auto;
}
`]
})

export class AppComponent {
    error: any;
    items: Data[] = [];
    page: number = 1;
    doSort: boolean = false;
    albumChoice = 0;

    constructor(private dataService: DataService,public matDialog: MatDialog){
    }
    

    ngOnInit(){
        this.dataService.getJSON().subscribe((
            data: any) => {this.items = data},
            error => {
                this.error = error.message;
                console.log(error);
            });
    }
    
    onPageChange(event: any){
        this.page = event;
    }

    DeleteItem(event: any,id:number){
        console.log('Вы удаляете картинку номер'+id.toString());
        this.dataService.setData(this.items);
        this.dataService.deleteData(id);
        this.items = this.dataService.getData();
    }

    OpenDialog(url: string){
        const modalDialog = this.matDialog.open(ModDialog,{
            width: "620px",
            height: "620px",
            data: {
                picUrl: url,
            }
        })
    }
}