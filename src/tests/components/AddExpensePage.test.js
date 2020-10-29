import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'


let startAddExpense, history, wrapper

beforeEach(() => {
    startAddExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)

})


test('should render add expage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle onsubmit', () => {
    const expense = expenses[1]
    console.log(expense)
    wrapper.find('ExpenseForm').prop('onSubmit')(expense)
    expect(startAddExpense).toHaveBeenLastCalledWith(expense)
    expect(history.push).toHaveBeenLastCalledWith('/')
})