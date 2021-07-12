import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-weather-map',
  templateUrl: './weather-map.component.html',
  styleUrls: ['./weather-map.component.scss']
})
export class WeatherMapComponent implements OnInit {
  @Input() options;
  @Input() layers;
  @Input() coords;
  @Input() hideData: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
