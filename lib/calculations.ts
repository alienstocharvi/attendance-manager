export function calculateAttendance(
  attended: number,
  total: number
): number {
  if (total === 0) return 0;

  return Number(((attended / total) * 100).toFixed(2));
}

export function classesNeededFor75(
  attended: number,
  total: number
): number {
  let a = attended;
  let t = total;

  let needed = 0;

  while ((a / t) * 100 < 75) {
    a++;
    t++;
    needed++;
  }

  return needed;
}