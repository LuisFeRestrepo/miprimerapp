import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { FileRoutingModule } from "./file-routing.module";
import { FileComponent } from "./file.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        FileRoutingModule
    ],
    declarations: [
        FileComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class FileModule { }
