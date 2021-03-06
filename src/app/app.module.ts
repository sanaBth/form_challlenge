import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
   MatButtonModule,
   MatFormFieldModule,
   MatInputModule,
   MatTableModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
