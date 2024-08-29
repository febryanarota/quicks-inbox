export function getRemainingDays(targetDate : string) {
  const today = new Date(); // Get today's date
  const target = new Date(targetDate); // Convert the target date string to a Date object

  // Calculate the difference in time (in milliseconds)
  const timeDifference = target.getTime() - today.getTime();

  // Convert the time difference from milliseconds to days
  const daysRemaining = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return daysRemaining;
}