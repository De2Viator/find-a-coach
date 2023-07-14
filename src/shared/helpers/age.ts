import { DateTime } from 'luxon'

export const calculateAge = (birthDayDate: string) => {
  const birthDay = DateTime.fromISO(birthDayDate)
  const newDate = DateTime.fromISO(new Date().toISOString())
  return Math.floor(newDate.diff(birthDay, 'years').years)
}
