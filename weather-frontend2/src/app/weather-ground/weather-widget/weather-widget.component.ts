import {Component, Input, OnInit} from '@angular/core';
import {WeatherData} from '../../model/weather-data';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.scss']
})
export class WeatherWidgetComponent implements OnInit {
  @Input() weatherData: WeatherData;
  @Input() hideData: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
