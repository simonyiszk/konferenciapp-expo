import { differenceInMinutes, isAfter, isBefore } from 'date-fns';

import { PresentationDto } from '../types/conference-api.type';

function getCurrentDate() {
  return new Date();
}

export function parseTime(timeStr: string) {
  if (/^\d{2}:\d{2}$/.test(timeStr)) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = getCurrentDate();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }
  return new Date(timeStr);
}

export function isPresentationPast(presentation: PresentationDto) {
  const now = getCurrentDate();
  const end = parseTime(presentation.endTime);
  return isBefore(end, now);
}

export function isPresentationCurrent(presentation: PresentationDto) {
  const now = getCurrentDate();
  const start = parseTime(presentation.startTime);
  const end = parseTime(presentation.endTime);
  return isBefore(start, now) && isAfter(end, now);
}

export function isPresentationUpcoming(presentation: PresentationDto) {
  const now = getCurrentDate();
  const start = parseTime(presentation.startTime);
  return isAfter(start, now) && differenceInMinutes(start, now) < 15;
}
