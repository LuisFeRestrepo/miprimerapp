import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SearchRoutingModule } from "./search-routing.module";
import { SearchComponent } from "./search.component";
//import { NewsService } from "../domain/news.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule
    ],
    declarations: [
        SearchComponent
    ],
    //providers: [NewsService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
