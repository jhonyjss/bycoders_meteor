export function getDayOfWeek(dateString: string): string | null {
  const daysOfWeekPtBr = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  const date = new Date(dateString);
  const dayIndex = date.getUTCDay();

  if (dayIndex >= 0 && dayIndex < daysOfWeekPtBr.length) {
    return daysOfWeekPtBr[dayIndex];
  } else {
    return null;
  }
}

export function getNext7CurrentTime(dateArray: string[]): string[] {
  const currentTime = new Date().toISOString().slice(0, 13);
  const index = dateArray.findIndex((item) => new Date(item).toISOString().slice(0, 13) === currentTime);

  return dateArray.slice(index, index + 7).map((item) => getTimeAndFormat(item));
}

export function getTimeAndFormat(_date: string) {
  const date = new Date(_date);

  const formattedTime = date.toLocaleTimeString([], { hour: "2-digit", hour12: true });

  return formattedTime;
}
