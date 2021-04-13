import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogueListComponent } from './components/catalogue-list/catalogue-list.component';
import { CatalogueEditComponent } from './components/catalogue-edit/catalogue-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreMaterialModule } from './core/core-material/core-material.module';

@NgModule({
  declarations: [
    AppComponent,
    CatalogueListComponent,
    CatalogueEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    CoreMaterialModule,
    AppRoutingModule,

  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
