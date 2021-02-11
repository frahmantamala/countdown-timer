import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimerWrapperComponent } from './timer-wrapper/timer-wrapper.component';
import { TimerDaysComponent } from './timer-unit/timer-unit-days/time-days.component';
import { TimerHoursComponent } from './timer-unit/timer-unit-hours/time-hours.component';
import { TimerMinutesComponent } from './timer-unit/timer-unit-minutes/time-minutes.component';
import { TimerSecondComponent } from './timer-unit/timer-unit-second/time-second.component';

@NgModule({
  declarations: [
    AppComponent,
    TimerWrapperComponent,
    TimerDaysComponent,
    TimerHoursComponent,
    TimerMinutesComponent,
    TimerSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
