import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    } = {}) => (
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
            }
        })

const removeExpense = ({ id }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

const setTextFilter = (text = "") => ({
    type: 'SET_TEXT_FILTER',
    text
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [...state, action.expense]

        case 'REMOVE_EXPENSE':
            const filtered = state.filter((expense) => expense.id !== action.id)
            return filtered

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense
                }
            })

        default:
            return state
    }
}

const filtersReducerDefaultState = ({
    text: undefined,
    sortBy: undefined,
    startDate: undefined,
    endDate: undefined
})


const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}
const sortByAmout = () => {
    return {
        type: 'SORT_BY_AMOUNT'
    }
}

const setStartDate = (startDate = undefined) => {
    return {
        type: 'SET_START_DATE',
        startDate
    }
}

const setEndDate = (endDate = undefined) => {
    return {
        type: 'SET_END_DATE',
        endDate
    }
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }

        case 'SET_START_DATE':
            console.log('start date is set to  ' + action.startDate)
            return {
                ...state,
                startDate: action.startDate
            }

        case 'SET_END_DATE':
            console.log('end date is set to  ' + action.endDate)
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state
    }
}



const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const two = store.dispatch(addExpense({ description: 'fod', amount: 1000, createdAt: 1500 }))
const the = store.dispatch(addExpense({ description: 'gas', amount: 825, createdAt: 2000 }))
const one = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: -1000 }))

// store.dispatch(removeExpense({ id: one.expense.id }))
// store.dispatch(removeExpense({ id: thee.expense.id }))
// store.dispatch(editExpense(two.expense.id, { amount: 500, note: "yuuuu" }))
// store.dispatch(setTextFilter('trent'))
// store.dispatch(setTextFilter('OO'))


store.dispatch(sortByAmout())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(1000))