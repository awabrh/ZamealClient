export const timeSince = (time: string) => {
  var seconds = Math.floor((Date.now() - Number(time)) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    if (interval < 3) return "سنتين";
    const years = interval < 10 ? " سنين" : " سنة";
    return "قبل " + Math.floor(interval) + years;
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    if (interval < 3) return "قبل شهرين";
    const months = interval < 11 ? " شهور" : " شهراً";
    return "قبل " + Math.floor(interval) + months;
  }
  interval = seconds / 86400;
  if (interval > 1) {
    if (interval < 3) return "قبل يومين";
    const days = interval < 11 ? " أيام" : " يوماً";
    return "قبل " + Math.floor(interval) + days;
  }
  interval = seconds / 3600;
  if (interval > 1) {
    if (interval < 3) return "قبل ساعتين";
    const hours = interval < 11 ? " ساعات" : " ساعة";
    return "قبل " + Math.floor(interval) + hours;
  }
  interval = seconds / 60;
  if (interval > 1) {
    if (interval < 3) return "قبل دقيقتين";
    const minutes = interval < 11 ? " دقائق" : " دقيقة";
    return "قبل " + Math.floor(interval) + minutes;
  }
  if (interval < 3) return "قبل ثانيتين";
  const secondsElapsed = interval < 11 ? " ثواني" : " ثانية";
  return "قبل " + Math.floor(seconds) + secondsElapsed;
};
