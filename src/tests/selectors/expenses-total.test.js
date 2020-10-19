import expenses_total from '../../selectors/expenses-total'


test('should add amount of empty expense', () => {
    const expenses = []
    const result = expenses_total(expenses)

    expect(result).toBe(0)
})

test('should add amount of single expense', () => {
    const expenses = [
        {
            amount: 1
        }
    ]
    const result = expenses_total(expenses)

    expect(result).toBe(1)
})

test('should add amount of multiple expenses', () => {
    const expenses = [
        {
            amount: 1
        }, {
            amount: 1
        }, {
            amount: 1
        }, {
            amount: 1
        }, {
            amount: 1
        },
    ]
    const result = expenses_total(expenses)

    expect(result).toBe(5)
})