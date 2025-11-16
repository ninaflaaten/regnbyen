export function getTodayDate(): string {
  const today = new Date();
  return today.toLocaleDateString();
}
