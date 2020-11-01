import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'



test('should set defaul state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual([])
})

test('should remove espenses by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([
        expenses[0],
        expenses[2]
    ])
})

test('should not remove espenses if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should add an expense', () => {
    const expense = {
        id: '121',
        description: 'for a laptop',
        note: '',
        createdAt: 2000000,
        amount: 29500
    }

    const action = {
        type: 'ADD_EXPENSE',
        expense
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, expense])
})

test('test should edit an expense', () => {
    const amount = 1220022
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: { amount }
    }

    const state = expensesReducer(expenses, action)
    expect(state[1].amount).toBe(amount)
})


test('test should not edit an expense if id not found', () => {
    const amount = 1220022
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-11',
        updates: { amount }
    }

    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})


test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }

    const state = expensesReducer(expenses, action)

    expect(state).toEqual([expenses[1]])
})