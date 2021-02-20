import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingScreenComponent } from './landing-screen/landing-screen.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { Cardview1Component } from './cardview1/cardview1.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { ICustomConfig, SvgMapModule } from 'ng-world-map-svg';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LandingScreenComponent,
    WorldMapComponent,
    PieChartComponent,
    Cardview1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
