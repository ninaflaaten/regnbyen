export function getTodayDate(): string {
  const today = new Date();
  return today.toLocaleDateString("nb-NO", {
    timeZone: "Europe/Oslo",
  });
}
