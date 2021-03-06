import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {

    onRemoveExpense = (expense) => {
        this.props.onRemoveExpense(expense)
        this.props.history.push('/')
    }

    onEditExpense = (id, expense) => {
        this.props.onEditExpense(id, expense)
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <div className='page-header'>
                    <div className='content-container'>
                        <h1 className='page-header__title'>editing the expens with the ID of {this.props.match.params.id}</h1>
                    </div>
                </div>

                <div className='content-container'>
                    <ExpenseForm
                        expense={this.props.expense}

                        onSubmit={(expense) => {
                            this.onEditExpense(this.props.expense.id, expense)
                        }}
                    />
                    <button className='button button--secondary'
                        onClick={() => {
                            this.onRemoveExpense(this.props.expense)
                        }}>
                        remove
                    </button>

                </div>


            </div>
        )
    }
}
// const EditExpensePage = (props) => {
//     console.log(props)
//     return (
//         <div>
//             editing the expens with the ID of {props.match.params.id}
//             <ExpenseForm
//                 expense={props.expense}

//                 onSubmit={(expense) => {
//                     props.dispatch(editExpense(props.expense.id, expense))
//                     props.history.push('/')
//                 }}
//             />
//             <button onClick={remove}>remove
//             </button>

//         </div>
//     )
// }


const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        onRemoveExpense: (expense) => {
            dispatch(startRemoveExpense(expense))
            // history.push('/')
        },
        onEditExpense: (id, expense) => {
            dispatch(startEditExpense(id, expense))
            // history.push('/')
            console.log('this is the update data')
            console.log()
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage) 