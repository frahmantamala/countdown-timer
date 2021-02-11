import { Timer } from './timer.interface';
import { InjectionToken } from '@angular/core';

export const TIMER = new InjectionToken<Timer>('Timer');
