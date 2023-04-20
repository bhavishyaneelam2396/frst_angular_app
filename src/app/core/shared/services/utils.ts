import { Injectable } from "@angular/core";

@Injectable()
export class Utils{
    constructor(){}
    setLocalStorgeValue(key:string,value:string){
        localStorage.setItem(key, value);
    }
    getLocalStorageValue(key:string){
       return localStorage.getItem(key)
    }
    clearLocalStorageValue(){
        localStorage.clear();
    }
}