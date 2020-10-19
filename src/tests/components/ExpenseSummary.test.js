import React from 'react'
import { ExpenseSummary } from '../../components/ExpenseSummary'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'

test('should render for 1 item', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render 0 for no item', () => {
    const wrapper = shallow(<ExpenseSummary expenses={[]} />)
    expect(wrapper).toMatchSnapshot()
})

test('should render multiple item', () => {
    const wrapper = shallow(<ExpenseSummary expenses={expenses} />)
    expect(wrapper).toMatchSnapshot()
})

