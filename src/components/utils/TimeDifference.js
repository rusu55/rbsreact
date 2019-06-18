import Moment from 'moment'

export function timeDifference(data){
    const currentDate = Moment().startOf('day')
    const givenDate = Moment(data, "YYYY-MM-DD")
    const result = Moment.duration(givenDate.diff(currentDate)).asDays()
    console.log(result)
    return result
}