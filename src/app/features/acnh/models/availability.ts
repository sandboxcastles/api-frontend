export interface IAvailability {
  'month-northern': string;
  'month-southern': string;
  time: string;
  isAllDay: boolean;
  isAllYear: boolean;
  location: string;
  rarity: string;
  'month-array-northern': number[];
  'month-array-southern': number[];
  'time-array': number[];
}
