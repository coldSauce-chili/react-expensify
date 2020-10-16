import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {

        const createdAtMoment = moment(expense.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment) : true
        const textMatch = typeof text !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase())


        //before momentjs
        //comparing only by raw epoch time
        //const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        //const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }
        // else {
        //     return 0
        // }
    })

}

