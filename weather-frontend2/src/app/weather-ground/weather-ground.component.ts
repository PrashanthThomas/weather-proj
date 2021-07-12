import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {circle, latLng, marker, polygon, tileLayer} from 'leaflet';
import {WeatherData} from '../model/weather-data';
import {WeatherDataService} from '../service/weather-data.service';
declare var ol: any;

@Component({
  selector: 'app-weather-ground',
  templateUrl: './weather-ground.component.html',
  styleUrls: ['./weather-ground.component.scss']
})
export class WeatherGroundComponent implements OnInit {
  weatherData: any;
  currentWeather: WeatherData;
  forecastDataList = [];
  options;
  city: string;
  coords: {lat: number, lon: number};
  layers;
  hideData = true;

  constructor(private weatherDataService: WeatherDataService) { }

  ngOnInit(): void {
    this.options = this.getOptions(12.9716, 77.5946);
  }

  getOptions(lat: number, lon: number) {
    return {
      layers: [
        tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      ],
        zoom: 5,
      center: latLng(lat, lon)
    };
  }

  weatherDataConverter(data) {
    return {
      date: new Date(data.dt),
      sunsetTime: new Date(data.sunsetTime * 1000),
      sunriseTime: new Date(data.sunsetTime * 1000),
      feelsLike: +(data.feels_like  - 273.15).toFixed(2),
      temprature: +(data.temp - 273.15).toFixed(2),
      minTemp: +(data.temp_min - 273.15).toFixed(2),
      maxTemp: +(data.temp_max - 273.15).toFixed(2),
      humidity: data.humidity
    };
  }

  forecastDataConverter(data) {
    return {
      date: new Date(data.dt * 1000),
      sunsetTime: new Date(data.sunsetTime * 1000),
      sunriseTime: new Date(data.sunsetTime * 1000),
      temprature: +(data.temp.day - 273.15).toFixed(2),
      minTemp: +(data.temp.min - 273.15).toFixed(2),
      maxTemp: +(data.temp.max - 273.15).toFixed(2),
      humidity: data.humidity
    };
  }

  getWeatherData():void {
    this.hideData = true;
    if (this.city != null && this.city !== '') {
      this.weatherDataService.getWeatherData(this.city).subscribe((data: any) => {
        if (data.cod === 404) {
          return;
        }
        this.hideData = false;
        this.currentWeather = this.weatherDataConverter(data.current);
        const weatherForecast = data.daily.slice(1,6);
        this.forecastDataList = weatherForecast.map(item => this.forecastDataConverter(item));
        this.coords = {
          lat: data.lat,
          lon: data.lon
        }
        this.options = this.getOptions(data.lat, data.lon);
        this.layers = this.getLayers(data.lat, data.lon);
      });
    }
  }

  getLayers(lat: number, lon: number) {
    return  [
      circle([ 46.95, -122 ], { radius: 5000 }),
      polygon([[ 46.8, -121.85 ], [ 46.92, -121.92 ], [ 46.87, -121.8 ]]),
      marker([ lat, lon ])
    ];
  }
}
