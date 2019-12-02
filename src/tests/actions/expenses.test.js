import { addExpense, editExpense, removeExpense } from "../../actions/expenses";


test('Remove Expense test',()=>{
    const action = removeExpense("123abc")
    expect(action).toEqual({
        type: "REMOVE_EXPENSE",
        id: "123abc"
    })
});

test('Edit Expense test',()=>{
    const action = editExpense("123abc",{amount:"ilyas", note: "20"})
    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id : "123abc",
        updates: {
        amount:"ilyas", 
        note: "20"
        }
    })

})

test('Add Expense test',()=>{
    const expense={ 
        description: "good expense", 
        note: "23", 
        amount: 2134, 
        createdAt: 1000 
    }
    const action= addExpense(expense);
    expect(action).toEqual({
        type : "ADD_EXPENSE",
        payload : {
            id : expect.any(String),
            ...expense
        }
    })
})
