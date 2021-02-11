import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { Timer } from '../timer.interface';
import { TIMER } from '../timer.token';

@Component({
  selector: 'app-timer-second',
  templateUrl: './time-second.component.html',
  styleUrls: ['./time-second.component.scss'],
  providers: [
    {
      provide: TIMER,
      useExisting: TimerSecondComponent
    }
  ]
})

export class TimerSecondComponent implements Timer, OnInit, OnDestroy {
  private subscription: Subscription;
  secondToDay: number;
  timeDifference: number;

  milisecondsInASecond = 1000;
  secondsInAMinutes = 60;

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
    this.secondToDay = Math.floor(
      (timeDeference) / (this.milisecondsInASecond) % this.secondsInAMinutes
    );
  }

  refresh(): void {
    this.milisecondsInASecond = 1000;
    this.secondsInAMinutes = 60;

    this.dDay = new Date('Mar 01 2021 00:00:00');
    this.getTimeDifference();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
