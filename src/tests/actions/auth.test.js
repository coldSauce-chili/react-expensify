import { login, logout } from '../../actions/auth'

test('should create action login', () => {
    const uid = '1'
    const action = login(uid)

    expect(action).toEqual({
        type: 'LOGIN',
        uid
    })
})

test('should create action logout', () => {
    const action = logout()
    expect(action).toEqual({
        type: 'LOGOUT'
    })
})