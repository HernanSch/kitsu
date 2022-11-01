import { SearchModule } from './shared/components/search/search.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';

import { AverageComponent } from './shared/components/average/average.component';

import { PipePipe } from './pipes/pipe.pipe';
import { CategoryComponent } from './shared/components/category/category.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    AverageComponent,

    PipePipe,
     CategoryComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    SearchModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
