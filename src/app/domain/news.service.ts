import { Injectable } from "@angular/core";

@Injectable()
export class NewsService{
    private news: Array<string> = [];

    agregar(s: string){
        this.news.push(s);
    }

    buscar(){
        return this.news;
    }
}