import {Customer} from './customer';

export interface Book {
  id?: number;
  bookCode?: string;
  deposit?: string;
  startTime?: number;
  period?: string;
  money?: string;
  interest?: string;
  description?: string;
  customer?: Customer;
}
