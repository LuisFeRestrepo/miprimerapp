import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { NewsService } from "../domain/news.service"; 


@Component({
    selector: "Search",
    templateUrl: "./search.component.html"/*,
    providers:[NewsService]*/
})
export class SearchComponent implements OnInit {

    constructor(private news: NewsService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
      this.news.agregar("hola");
      this.news.agregar("hola_1");
      this.news.agregar("hola_2");
      this.news.agregar("hola_3");
      this.news.agregar("hola_4");
      this.news.agregar("hola_5");
      this.news.agregar("hola_6");
      this.news.agregar("hola_7");
      this.news.agregar("hola_8");
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
