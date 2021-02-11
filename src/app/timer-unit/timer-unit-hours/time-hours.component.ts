import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Timer } from '../timer.interface';
import { TIMER } from '../timer.token';

@Component({
  selector: 'app-timer-hours',
  templateUrl: './time-hours.component.html',
  styleUrls: ['./time-hours.component.scss'],
  providers: [
    {
      provide: TIMER,
      useExisting: TimerHoursComponent
    }
  ]
})

export class TimerHoursComponent implements Timer, OnInit, OnDestroy {
  private subscription: Subscription;
  hoursToDay: number;
  timeDifference: number;

  milisecondsInASecond = 1000;
  minutesInAnHour = 24;
  secondsInAMinutes = 60;
  hoursInADay = 24;

  dDay = new Date('Mar 01 2021 00:00:00');

  ngOnInit(): void {
    this.subscription = interval(1000).subscribe(
      x => {
        this.getTimeDifference();
      }
    );
  }

  getTimeDifference(): void {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.calculateUnits(this.timeDifference);
  }

  calculateUnits(timeDeference: number): void {
    this.hoursToDay = Math.floor(
      (timeDeference) / (this.milisecondsInASecond * this.minutesInAnHour * this.secondsInAMinutes) % this.hoursInADay
    );
  }

  refresh(): void {
    this.milisecondsInASecond = 1000;
    this.minutesInAnHour = 24;
    this.secondsInAMinutes = 60;
    this.hoursInADay = 24;

    this.dDay = new Date('Mar 01 2021 00:00:00');
    this.getTimeDifference();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
