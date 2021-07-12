import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from '../../model/weather-data';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {
  @Input()forecastDataList: WeatherData[];
  @Input() hideData: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
