//ecxport stateless coponent
// redner description, amout date crated

import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
const ExpenseListItems = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
            <h4>description: {description}</h4>
        </Link>

        <p>{numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')} </p>
    </div>
)
export default ExpenseListItems
