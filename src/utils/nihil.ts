import { v4 as uuid } from 'uuid';
import dayjs from 'dayjs';
import ko from 'dayjs/locale/ko';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(relativeTime);
dayjs.tz.setDefault('Asia/Seoul');
dayjs.locale(ko);

export class Nihil {
  static uuid(index: number) {
    return uuid() + index;
  }

  static string(data: any) {
    return JSON.stringify(data);
  }

  static parse(stringData: string) {
    return JSON.parse(stringData);
  }

  static date(date?: (string | number | Date)) {
    return dayjs(date || new Date()).tz('Asia/Seoul');
  }

  static dateFormat(date?: (string | number | Date), format?: string) {
    return this.date(date || new Date()).format(format || 'YYYY-MM-DD');
  }
}
