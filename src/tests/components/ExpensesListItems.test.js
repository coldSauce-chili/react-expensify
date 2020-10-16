import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItems from '../../components/ExpenseLIstItem'
import expenses from '../fixtures/expenses'

test('this should render an expense item', () => {
    const wrapper = shallow(<ExpenseListItems {...expenses[1]} />)

    expect(wrapper).toMatchSnapshot()
})