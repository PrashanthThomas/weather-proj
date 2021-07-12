import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class WeatherDataService {
  constructor(private http: HttpClient) {}

  getWeatherData(city: string) {
    return this.http.get(`http://localhost:3000/weatherData/${city}`);
  }
}
