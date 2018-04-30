import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {StarComponent} from "./star.component";
import {ConvertToSpacePipe} from "./convert-to-space-pipe";
import {FormsModule} from "@angular/forms";
import {PageNotFoundModule} from "../pageNotFound/pageNotFound.module";

@NgModule({
  imports: [
    CommonModule,
    PageNotFoundModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    StarComponent,
    ConvertToSpacePipe,
    PageNotFoundModule,
  ],
  declarations: [
    StarComponent,
    ConvertToSpacePipe,
  ]
})
export class SharedModule { }
