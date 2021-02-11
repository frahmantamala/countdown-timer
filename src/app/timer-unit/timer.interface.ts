export interface Timer {
  getTimeDifference: () => void;
  calculateUnits: (timeDeference: number) => void;
  refresh: () => void;
}
