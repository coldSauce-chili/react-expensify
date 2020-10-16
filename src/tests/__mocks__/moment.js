// can use this. this will cause self calls
//import moment will call mock moment...mock moment will call import moment
// import moment from 'moment'
const moment = require.requireActual('moment')

export default (timestamp = 0) => {
    return moment(timestamp)
}