import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FooterComponent } from 'src/app/theme/sections/footer/footer.component';
import { MenuComponent } from 'src/app/theme/sections/menu/menu.component';
import { HeaderComponent } from 'src/app/theme/sections/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent, MenuComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
