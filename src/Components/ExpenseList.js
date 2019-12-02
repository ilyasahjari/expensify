import React from 'react'
import { connect } from 'react-redux';
import MapExpenses from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expenses'


export const ExpenseList = (props) => {
    return (
        <div>
            <h1> Showing Expenses Redux List </h1>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 5,
            }}>
                {
                    props.expenses.map((expense) => {
                        return <MapExpenses key={expense.id} {...expense} />
                    })
                }
            </div>
        </div>
    )
}

const mapsToProps = (state) => {
    return {
        expenses: getVisibleExpenses(state.expenses, state.filters)
    }
}


export default connect(mapsToProps)(ExpenseList);