import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseLIstItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>no expenses</p>
            ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem
                            key={expense.id}
                            {...expense}
                        />
                    ))
                )
        }

    </div>
)


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}

export default connect(mapStateToProps)(ExpenseList)




//the 'below' is how the 'above' works

// const ConnectedExpenseList = connect((state) => {
//     return {
//         expenses: state.expenses
//     }
// })(ExpenseList)

// export default ConnectedExpenseList