import authReducer from '../../reducers/auth'

test('should set state of uid on login', () => {
    const uid = 'myUID'
    const state = authReducer({}, {
        type: 'LOGIN',
        uid
    })
    expect(state).toEqual({ uid })
})

test('should clear state of uid on logout', () => {
    const uid = {}
    const state = authReducer({ uid: 'myUID' }, {
        type: 'LOGOUT'
    })
    expect(state).toEqual({})
})