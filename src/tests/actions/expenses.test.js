import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import { stringify } from 'uuid'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => done())
})

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

    const action = addExpense(expenses[2])

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: 'mouse',
        amount: 64646,
        createdAt: 12252424,
        note: 'cheaper'
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }

        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(expenseData)
        done()
    })

})

test('should add expense with defaults to database and store', (done) => {

    const store = createMockStore({})
    const expenseData = {}

    const expenseDefault = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefault
            }

        })
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(expenseDefault)
        done()
    })

})


test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses)

    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should fetch expenses from firebase', (done) => {
    const store = createMockStore()
    store.dispatch(startSetExpenses())
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'SET_EXPENSES',
                expenses
            })
            done()
        })
})

// test('should setup add expense action object no data', () => {

//     const expenseData = {
//         description: '',
//         note: '',
//         amount: 0,
//         createdAt: 0
//     }
//     const action = addExpense({})

//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             ...expenseData,
//             id: expect.any(String)
//         }
//     })
// })

