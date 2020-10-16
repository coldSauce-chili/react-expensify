import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'i23hir2' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'i23hir2'
    })
})

test('should setup edit expense action object', () => {
    const action = editExpense('i23hir2', { description: 'updated desction' })

    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'i23hir2',
        updates: { description: 'updated desction' }

    })
})

test('should setup add expense action object', () => {

    const expenseData = {
        description: 'rent',
        amount: 209303,
        createdAt: 2442303,
        note: 'this is mu norte'
    }
    const action = addExpense(expenseData)

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})


test('should setup add expense action object no data', () => {

    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }
    const action = addExpense({})

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

