import expenseReducers from '../../reducers/expenses'

test('test expense reducer default working',()=>{
    const state = expenseReducers( undefined , { type: '@@INIT' } )
    expect(state).toEqual([])
})

test('test expense reducer',()=>{
    const action = { type : "REMOVE_EXPENSE"}
    const state = expenseReducers([], action)
    console.log(state)
    expect(state).toEqual([]);
})