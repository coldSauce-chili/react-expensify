import { createStore } from 'redux'

//action generator
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// })

//destructure
//concise way of writing generators
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy: incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ setBy = 1 } = {}) => ({
    type: 'SET',
    setBy: setBy
})

const counteducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.setBy
            }

        default:
            return state
    }
}

const store = createStore(counteducer)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCount({ incrementBy: 3 }))

store.dispatch(incrementCount({ incrementBy: 3 }))

store.dispatch(resetCount())

store.dispatch(decrementCount({ decrementBy: 100 }))

store.dispatch(setCount({ setBy: 200 }))


