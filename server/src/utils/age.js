import moment from 'moment'

export function ageFromBirthday (birthDate) {
    const currentDate = moment()
    return currentDate.diff(birthDate, 'years')
}
