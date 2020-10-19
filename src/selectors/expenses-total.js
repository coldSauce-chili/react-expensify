
export default (expenses) => {
    const expenses_amount = expenses.map(expense => expense.amount)
    const expenses_total = expenses_amount.reduce((acc, cur) => acc + cur, 0)

    return expenses_total
}