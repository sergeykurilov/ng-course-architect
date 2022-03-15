import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutocompleteComponent } from './autocomplete.component';
import { HighlightPipe } from './pipes/highlight.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from "@angular/material/autocomplete";



@NgModule({
  declarations: [
    AutocompleteComponent,
    HighlightPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  exports: [
    AutocompleteComponent
  ]
})
export class AutocompleteModule { }
