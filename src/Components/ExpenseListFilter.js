import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters'

const ExpenseFilter = ({ dispatch }) => {
    return (
        <div>
            <h5>
                Search : <br />
                <input type='text' onChange={(e) => {
                    dispatch(setTextFilter(e.target.value))
                }} />
            </h5>

            <h5>
                sort by : <br />
                <select onChange={(e) => {
                    if (e.target.value !== " ") {
                        if (e.target.value === 'sortbyamount')
                            dispatch(sortByAmount());
                        else if (e.target.value === 'sortbydate')
                            dispatch(sortByDate());
                    }
                }}>
                    <option value=" "> </option>
                    <option value="sortbyamount">Sort By Amount</option>
                    <option value="sortbydate">Sort By Date</option>
                </select>

            </h5>

        </div>
    )
}




export default connect()(ExpenseFilter);