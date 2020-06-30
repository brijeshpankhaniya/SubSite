import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AddSubSiteComponent } from './add-sub-site/add-sub-site.component';
import { SiteTableComponent } from './site-table/site-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AddSubSiteComponent,
    SiteTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
