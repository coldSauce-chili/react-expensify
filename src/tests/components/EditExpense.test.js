import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'


let onEditExpenseSpy, onRemoveExpenseSpy, history, wrapper, match, expense

beforeEach(() => {
    onEditExpenseSpy = jest.fn()
    onRemoveExpenseSpy = jest.fn()
    expense = expenses[0]
    history = {
        push: jest.fn()
    }

    match = {
        params: { id: 1 }
    }
    wrapper = shallow(<EditExpensePage onEditExpense={onEditExpenseSpy} onRemoveExpense={onRemoveExpenseSpy} history={history} match={match} expense={expense} />)

})

test('should render edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onRemoveExpense spy', () => {

    wrapper.find('button').simulate('click')

    expect(onRemoveExpenseSpy).toHaveBeenLastCalledWith(expense)
})

test('should handle onEditExpense spy', () => {

    wrapper.find('ExpenseForm').prop('onSubmit')(expense)

    expect(onEditExpenseSpy).toHaveBeenLastCalledWith(expense.id, expense)
})

