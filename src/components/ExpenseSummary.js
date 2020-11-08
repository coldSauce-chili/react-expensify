import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import totalExpense from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpenseSummary = (props) => {

    const expensesCount = props.expenses.length
    const total = numeral(totalExpense(props.expenses) / 100).format('$0,0.00')

    return (
        <div className='page-header'>
            <div className='content-container'>
                <h4 className='page-header__title'>viewing <span>{expensesCount}</span> expenses totalling <span>{total}</span> </h4>
                <div className='page-header__actions'>
                    <Link className='button' to='/create'>Add expense</Link>
                </div>
            </div>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)