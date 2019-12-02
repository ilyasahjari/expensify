import React from 'react';
import './App.css';
import Ilyas from './Ilyas';

import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = ({
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
} = {}) =>
    ({
        type: 'ADD_EXPENSE',
        payload:
        {
            id: uuid(),
            description,
            note,
            amount,
            createdAt
        }
    });


// REMOVE_EXPENSE
const removeExpense = (id) => ({
    type: "REMOVE_EXPENSE",
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) =>
    ({
        type: "EDIT_EXPENSE",
        id,
        updates
    });

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
})

// SET_START_DATE
const setStartDate = (startDate) => ({
    type: "SET_START_DATE",
    startDate,
})

// SET_END_DATE
const setEndDate = (endDate) => ({
    type: "SET_END_DATE",
    endDate,
})



const expenseReducerDefault = [];

const filterReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const expenseReducer = (state = expenseReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.payload
            ];

        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);

        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id)
                    return {
                        ...expense,
                        ...action.updates
                    }; else {
                    return expense;
                }
            });

        default:
            return state;
    }
};

const filterReducer = (state = filterReducerDefault, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: "date"
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: "amount"
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }

        default:
            return state;
    }
}


const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer
    })
);


//a test to show if the filter can see the elements existing in the expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {

    const filteredExpenses =
        expenses.filter((expense) => {
            const startDateMatch = expense.createdAt >= startDate;
            const endDateMatch = expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        });

        
    return filteredExpenses.sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1;
        }
    });
};


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addExpense({ description: "good expense", note: "23", amount: 2134, createdAt: 1000 }));
const expenseTwo = store.dispatch(addExpense({ description: "great expense", note: "3", amount: 214, createdAt: -1000 }));

/*edits related just to the expenses*/
// store.dispatch(removeExpense( expenseOne.payload.id ));
// store.dispatch(editExpense(expenseTwo.payload.id,{amount:100}))


/*---- edits related to filters of expenses-------*/
store.dispatch(sortByAmount())
//store.dispatch(sortByDate())
//store.dispatch(setEndDate(900))
//store.dispatch(setStartDate(-10000))

//just a demo to see how it will be shown
const demoState = {
    expenses:
        [{
            id: '123',
            description: 'good product',
            note: 'hsudhf',
            amount: 92,
            createdAt: 2019

        }],
    filters: {
        text: 'rent',
        sortBy: 'note',
        startDate: undefined,
        endDate: undefined
    }
}




function App() {
    const lastname = "ahjari"
    const firstname = "ilyas"
    const fullname = {
        fname: 'khghdf',
        lname: 'ljhl'

    };
    return (
        <div className="App">
            <Ilyas lname={lastname} fname={firstname} />
        </div>
    );

}

export default App;
