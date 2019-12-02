import { createStore } from 'redux';
import { useState } from 'react';

const [count, setCount] = useState(0);

const incrementCount = (action = {}) =>({
    type : 'INCREMENT',
    incrementBy : typeof action.incrementBy ==='number' ? action.incrementBy : 1
});

const decrementCount = ( { decrementBy = 1 } = { }) => ({
    type : 'DECREMENT',
    decrementBy
});



const resetCount = ( { reset = 0 } = {} ) => ({
    type : 'RESET',
    reset
});

const countReducer = (store = count, action)=> {
    switch(action.type) {
         case 'INCREMENT' :
             return setCount(count + action.incrementBy);
         case 'DECREMENT' :
             return setCount(count - action.decrementBy);
         case 'RESET' :
             return setCount(action.reset);
         default :
             return count;
    }
}

const store = createStore (countReducer());


const unsubscribe = store.subscribe(()=>{
    console.log(store.getState)
});


store.dispatch(incrementCount());



//unsubscribe();


store.dispatch(decrementCount({decrementBy : 10}));

store.dispatch(resetCount({reset : 0}));


store.dispatch({type : 'RESET'})      