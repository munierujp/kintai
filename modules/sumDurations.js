import { Duration } from 'luxon'

function sumDurations (...durations) {
  return durations.reduce((a, b) => a.plus(b), Duration.fromMillis(0))
}
export default sumDurations
