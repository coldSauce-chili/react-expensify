import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


const now = moment()
console.log(now.format('MMM Do, YYYY'))


export default class ExpenseForm extends React.Component {

    // Mead claimed that Props cannot be access without using constructor
    // from video: Section 11 - Wiring Up Edit Expense
    // Debunk below
    constructor(props) {
        super(props)
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ""
        }
    }

    // THIS IS A VALID SYNTAX!!
    //  you can access props by using this.props
    // no need constructor()
    //
    // state = {
    //     description: this.props.expense ? this.props.expense.description : '',
    //     note: this.props.expense ? this.props.expense.note : '',
    //     amount: this.props.expense ? (this.props.expense.amount / 100).toString() : '',
    //     createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
    //     calendarFocused: false,
    //     error: ""
    // }




    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
        // console.log(this.state.description)
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
            // console.log(this.state.amount)

        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }))
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: "input description and amount" }))
        } else {
            this.setState(() => ({ error: "" }))
            console.log('submitted')
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    }
    render() {
        return (
            <form className='form' onSubmit={this.onSubmit}>
                {this.state.error && <p className='form__error'>{this.state.error}</p>}
                <input
                    type="text"
                    placeholder="description"
                    autoFocus
                    className='text-input'
                    value={this.state.description}
                    onChange={this.onDescriptionChange}
                />
                <input
                    type="text"
                    placeholder="amount"
                    className='text-input'
                    value={this.state.amount}
                    onChange={this.onAmountChange}
                />
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => (false)}
                />
                <textarea
                    placeholder="notes"
                    className='textarea'
                    value={this.state.note}
                    onChange={this.onNoteChange}
                >
                </textarea>
                <div>
                    <button className='button'>Add expense</button>
                </div>

            </form>
        )

    }
} 