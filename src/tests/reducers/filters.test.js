import filtersReducers from "../../reducers/filters"

test('Test filter Reducers default',()=>{
    const state = filtersReducers({text : "",sortBy: "",startDate:"",endDate:""},"@@INIT")
    expect(state).toEqual({text : "",sortBy: "",startDate:"",endDate:""})
})

test('Test filter Reducer for Set Text',()=>{
    const state = filtersReducers({text:"abc",sortBy:"",startDate:"",endDate:""},"SET_TEXT_FILTER")
    expect(state).toEqual({text:"abc",sortBy:"",startDate:"",endDate:""});
})