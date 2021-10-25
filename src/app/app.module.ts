import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from './app.component';
import { DataService } from "./data.service"; 
import {ModDialog} from './modal.component';
import { AlbumFilterPipe } from './filter.pipe';
import { AlbumIdPipe } from './albumid.pipe';



@NgModule({
    imports: [BrowserModule,BrowserAnimationsModule, FormsModule,HttpClientModule,NgxPaginationModule,MatDialogModule], 
    declarations: [AppComponent,ModDialog,AlbumFilterPipe,AlbumIdPipe], 
    bootstrap: [AppComponent],
	exports:      [ ], 
    providers:    [DataService],
    entryComponents: [ModDialog] 
})
export class AppModule { }