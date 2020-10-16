import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, editExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'


const store = configureStore()

store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})

const two = store.dispatch(addExpense({ description: 'fod', amount: 1000, createdAt: 1500 }))
const the = store.dispatch(addExpense({ description: 'gas', amount: 825, createdAt: 2000 }))
const one = store.dispatch(addExpense({ description: 'rent', amount: 1000, createdAt: -1000 }))
const fiv = store.dispatch(addExpense({ description: 'rent', amount: 999, createdAt: 899 }))
store.dispatch(addExpense({ description: 'fod', amount: 7458, createdAt: 5428 }))
store.dispatch(addExpense({ description: 'gas', amount: 45712, createdAt: 7845 }))
store.dispatch(addExpense({ description: 'rent', amount: 6598, createdAt: 4515 }))
store.dispatch(addExpense({ description: 'rent', amount: 4545, createdAt: 4545 }))
store.dispatch(addExpense({ description: 'fod', amount: 5555, createdAt: 5588 }))
store.dispatch(addExpense({ description: 'gas', amount: 4555, createdAt: 4580 }))
store.dispatch(addExpense({ description: 'rent', amount: 7471, createdAt: 4578 }))
store.dispatch(addExpense({ description: 'rent', amount: 3565, createdAt: 2659 }))
store.dispatch(addExpense({ description: 'fod', amount: 5852, createdAt: 5986 }))
store.dispatch(addExpense({ description: 'gas', amount: 6369, createdAt: 6594 }))
store.dispatch(addExpense({ description: 'rent', amount: 8965, createdAt: 3687 }))
store.dispatch(addExpense({ description: 'rent', amount: 8585, createdAt: 8945 }))


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))

// setTimeout(() => {
//     store.dispatch(setTextFilter('fod'))
// }, 6000)