import React from 'react'
import { shallow } from 'enzyme'
import LoadingPage from '../../components/LoadingPage'


test('should render loading page', () => {
    const snapshot = shallow(<LoadingPage />)

    expect(snapshot).toMatchSnapshot()
})