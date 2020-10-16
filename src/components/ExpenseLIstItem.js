//ecxport stateless coponent
// redner description, amout date crated

import React from 'react'
import { Link } from 'react-router-dom'

const ExpenseListItems = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`edit/${id}`}>
            <h4>description: {description}</h4>
        </Link>
        <h5>amount: {amount}</h5>
        <h6>date: {createdAt}</h6>

    </div>
)

export default ExpenseListItems
