import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    editExpense,
    removeExpense,
    setExpenses,
    startSetExpenses,
    startRemoveExpense,
    startEditExpense
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import { stringify } from 'uuid'
import database from '../../firebase/firebase'

const uid = 'mytestuid'
const defaultAuthState = { auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {}
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done())
})

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: 'i23hir2' })

    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'i23hir2'
    })
})


test('should remove expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)

    store.dispatch(startRemoveExpense(expenses[1]))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'REMOVE_EXPENSE',
                id: expenses[1].id
            })
            return database.ref(`users/${uid}/expenses/${expenses[1].id}`).once('value')

        })
        .then((snapShot) => {
            expect(snapShot.val()).toBeFalsy
            done()
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
    const store = createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')

    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(expenseData)
        done()
    })

})

test('should add expense with defaults to database and store', (done) => {

    const store = createMockStore(defaultAuthState)
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
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')

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
    const store = createMockStore(defaultAuthState)
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

test('should edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {
        description: 'updated gum',
        note: "updated not",
        amount: 55555,
        createdAt: 0
    }

    store.dispatch(startEditExpense(id, updates))
        .then(() => {
            const actions = store.getActions()
            expect(actions[0]).toEqual({
                type: 'EDIT_EXPENSE',
                id,
                updates
            })

            return database.ref(`users/${uid}/expenses/${id}`).once('value')
        })
        .then((snapShot) => {
            expect(snapShot.val()).toEqual(updates)
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

