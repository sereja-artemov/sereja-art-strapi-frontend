
export default function getLocaleDate(locales: string, date: string, monthStrLength:string = 'long', options: object = {
  year: 'numeric',
  month: monthStrLength,
  day: 'numeric',
  timezone: 'UTC'
}) {

  return new Date(date).toLocaleString(locales, options);
}
