import React from 'react'
import { removeExpense } from '../actions/expenses'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const ExpenseListItem = ({ dispatch, id, description, createdAt, amount }) => {
    const milToDate = new Date(createdAt)
    const creationDateFormat = milToDate.getDate() + "/" + (milToDate.getMonth() + 1) + "/" + milToDate.getFullYear();

    return (
        <div>
            <p>
                Name : <Link to= {`/edit/${id}`} title="Edit item">{description}</Link><br />
                Created at : {creationDateFormat}<br />
                Amount : {amount}<br />
                <button onClick={() => { dispatch(removeExpense(id)) }}>Delete</button>
            </p>
        </div>
    )
}

export default connect()(ExpenseListItem);
