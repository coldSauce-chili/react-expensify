import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseLIstItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => (
    <div className='content-container'>
        <div className='list-header'>
            <div className='show-for-mobile'>expenses</div>
            <div className='show-for-desktop'>
                expense
            </div>
            <div className='show-for-desktop'>
                amount
            </div>
        </div>
        <div className='list-body'>
            {
                props.expenses.length === 0 ? (

                    <div className='list-item list-item--message'>
                        <span>no expenses</span>
                    </div>
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