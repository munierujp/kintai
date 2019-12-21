import holiday from '@holiday-jp/holiday_jp'

function isHoliday (date) {
  return holiday.isHoliday(date)
}

export default isHoliday
