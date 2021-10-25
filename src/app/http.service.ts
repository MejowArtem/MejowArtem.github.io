import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class HttpService{
    constructor(private http: HttpClient) { }

    getJSON(){
        return this.http.get('http://jsonplaceholder.typicode.com/photos')
    }

    deleteById(id:number){
        return this.http.delete('http://jsonplaceholder.typicode.com/photos/'+id.toString())
    }
}