import moment from 'moment'

import filtersReducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')

    })
})

test('should set sort by to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })

    expect(state.sortBy).toBe('amount')
})

test('should set sort by to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }

    const action = { type: 'SORT_BY_DATE' }

    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})


test('should set text filter', () => {
    const currentState = {
        text: '',
        sortBy: 'undefined',
        startDate: undefined,
        endDate: undefined
    }

    const action = {
        type: 'SET_TEXT_FILTER',
        text: 'mytext'
    }

    const state = filtersReducer(currentState, action)

    expect(state.text).toBe('mytext')
})

test('should set start date', () => {
    const currentState = {
        text: '',
        sortBy: 'undefined',
        startDate: 1000000000000,
        endDate: undefined
    }

    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    }

    const state = filtersReducer(currentState, action)

    expect(state.startDate).toEqual(moment(0))
})

test('should set end date', () => {
    const currentState = {
        text: '',
        sortBy: 'undefined',
        startDate: undefined,
        endDate: 100000000000
    }

    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    }

    const state = filtersReducer(currentState, action)

    expect(state.endDate).toEqual(moment(0))
})