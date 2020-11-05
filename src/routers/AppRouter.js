import React from 'react'
import { BrowserRouter, Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

// import Header from '../components/Header'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import ExpenseDashBoardPage from '../components/ExpenseDashBoardPage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>

            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage} exact={true} />
                <PrivateRoute path="/create" component={AddExpensePage} exact={true} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)


export default AppRouter