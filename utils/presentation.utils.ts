import { differenceInMinutes, isAfter, isBefore } from 'date-fns';

import { PresentationDto } from '../types/conference-api.type';

function getCurrentDate() {
  return new Date();
}

export function isPresentationPast(presentation: PresentationDto) {
  const now = getCurrentDate();
  const end = new Date(presentation.endTime);
  return isBefore(end, now);
}

export function isPresentationCurrent(presentation: PresentationDto) {
  const now = getCurrentDate();
  const start = new Date(presentation.startTime);
  const end = new Date(presentation.endTime);
  return isBefore(start, now) && isAfter(end, now);
}

export function isPresentationUpcoming(presentation: PresentationDto) {
  const now = getCurrentDate();
  const start = new Date(presentation.startTime);
  return isAfter(start, now) && differenceInMinutes(start, now) < 15;
}
