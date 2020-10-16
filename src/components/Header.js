import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink activeClassName="is-active" to="/" exact={true}>dash</NavLink>
        <NavLink activeClassName="is-active" to="/create">create</NavLink>
        <NavLink activeClassName="is-active" to="/help">help</NavLink>
    </header>
)

export default Header