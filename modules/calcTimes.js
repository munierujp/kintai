import floorDuration from './floorDuration'
import formatDuration from './formatDuration'
import newDurationFromHTMLTime from './newDurationFromHTMLTime'

function calcTimes ({ stayingTime, breakTime, standardWorkingTime, workingTimeUnits }) {
  const stayingTimeDuration = newDurationFromHTMLTime(stayingTime)
  const breakTimeDuration = newDurationFromHTMLTime(breakTime)
  const actualWorkingTimeDuration = stayingTimeDuration.minus(breakTimeDuration)
  const workingTimeDuration = floorDuration(actualWorkingTimeDuration, workingTimeUnits)
  const standardWorkingTimeDuration = newDurationFromHTMLTime(standardWorkingTime)
  const overtimeDuration = workingTimeDuration.minus(standardWorkingTimeDuration)
  return {
    stayingTime,
    breakTime,
    actualWorkingTime: toHTMLTime(actualWorkingTimeDuration),
    workingTime: toHTMLTime(workingTimeDuration),
    standardWorkingTime,
    overtime: toHTMLTime(overtimeDuration)
  }
}

function toHTMLTime (duration) {
  return duration.isValid ? formatDuration(duration, 'hh:mm') : ''
}

export default calcTimes
