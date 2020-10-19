import React from 'react'
import { connect } from 'react-redux'
import selectExpenses from '../selectors/expenses'
import totalExpense from '../selectors/expenses-total'
import numeral from 'numeral'


export const ExpenseSummary = (props) => {

    const expensesCount = props.expenses.length
    const total = numeral(totalExpense(props.expenses) / 100).format('$0,0.00')

    return (
        <div>
            <h4>viewing {expensesCount} expenses totalling {total} </h4>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)