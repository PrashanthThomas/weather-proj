import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {WeatherDataService} from './service/weather-data.service';
import { WeatherGroundComponent } from './weather-ground/weather-ground.component';
import { WeatherWidgetComponent } from './weather-ground/weather-widget/weather-widget.component';
import { WeatherForecastComponent } from './weather-ground/weather-forecast/weather-forecast.component';
import { WeatherMapComponent } from './weather-ground/weather-map/weather-map.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherGroundComponent,
    WeatherWidgetComponent,
    WeatherForecastComponent,
    WeatherMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LeafletModule,
    HttpClientModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
