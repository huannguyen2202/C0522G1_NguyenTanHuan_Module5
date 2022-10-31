import {KhType} from './kh-type';

export interface Kh {
  id?: number;
  khName?: string;
  khBirthday?: string;
  khGender?: number;
  khIdCard?: string;
  khPhone?: string;
  khEmail?: string;
  khAddress?: string;
  khType?: KhType;
}
