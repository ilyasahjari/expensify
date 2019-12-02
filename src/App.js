import React from 'react';
import configureStore from './store/configureStore'
import AppRouter from './Router/AppRouter'
import { addExpense } from './actions/expenses' 
import getVisibleExpenses from './selectors/expenses'
import {sortByAmount, sortByDate, setTextFilter} from './actions/filters'
import { Provider } from 'react-redux'

const store = configureStore();
//console.log(store.getState());


store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});



const expenseOne = store.dispatch(addExpense({ description: "Water Gas", note: "23", amount: 59, createdAt : 1998234798 }));
const expenseTwo = store.dispatch(addExpense({ description: "Football Equipement", note: "3", amount: 214, createdAt : 2328749827010 }));
const expensethree = store.dispatch(addExpense({ description: "Super Glue", note: "128", amount: 12, createdAt : 20897342719 }));


//store.dispatch(sortByAmount()); 

function App() 
{
    return (
        <Provider store={store}>
            <AppRouter/>
        </Provider>
    );
}

export default App;
