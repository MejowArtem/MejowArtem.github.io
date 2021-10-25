import { Injectable } from "@angular/core";
import { HttpService } from "./http.service";
import {Data} from "./data";


@Injectable()
export class DataService {

    data: Data[] = [];
    error: any;

    constructor (private httpService : HttpService) {}
    

    getData(): Data[]{
        return this.data;
    }

    deleteData(id:number) {
        var spliceId = this.data.findIndex(obj => obj.id === id);
        this.data.splice(spliceId,1);
        this.httpService.deleteById(id).subscribe({
            error: error => {
                this.error = error.message;
                console.log(error);
            }
        });
    }

    setData(newData: Data[]){
        this.data = newData;
    }
    
    getJSON(){
       return this.httpService.getJSON()
    }
}