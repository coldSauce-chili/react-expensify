import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import { startLogout } from '../actions/auth'
import { connect } from 'react-redux'
export const Header = ({ startLogout }) => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/dashboard" >dash</NavLink>
        <NavLink activeClassName="is-active" to="/create">create</NavLink>
        <NavLink activeClassName="is-active" to="/help">help</NavLink>
        <button onClick={startLogout}>logout</button>
    </header>
)
const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})
export default connect(undefined, mapDispatchToProps)(Header)