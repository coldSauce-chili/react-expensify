import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import expenses from '../fixtures/expenses'
import { filters, altFilters } from '../fixtures/filter'
import moment from 'moment'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper, startDate, endDate


beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    startDate = moment(0)
    endDate = moment(0).add(3, 'days')

    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
})


test('should render expenselist filters correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render expenselist filters with altdata correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    wrapper.find('input').simulate('change', { target: { value: 'mytext' } })
    expect(setTextFilter).toHaveBeenLastCalledWith('mytext')
})

test('should sort by date', () => {
    wrapper.find('select').simulate('change', { target: { value: 'date' } })
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    wrapper.find('select').simulate('change', { target: { value: 'amount' } })
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date change', () => {
    wrapper.find('DateRangePicker').simulate('datesChange', { startDate: startDate, endDate: endDate })
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('should handle calendar focused changed', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})