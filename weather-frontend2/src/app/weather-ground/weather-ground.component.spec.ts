import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGroundComponent } from './weather-ground.component';

describe('WeatherGroundComponent', () => {
  let component: WeatherGroundComponent;
  let fixture: ComponentFixture<WeatherGroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
