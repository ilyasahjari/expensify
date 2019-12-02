import { setTextFilter, sortByDate, setStartDate, setEndDate, sortByAmount } from "../../actions/filters";

test('Test text filter',()=>{
    const textFilter = setTextFilter("ilyas");
    expect(textFilter).toEqual({
        type : "SET_TEXT_FILTER",
        text : "ilyas"
    }) 
})

test('Test Sort by Date',()=>{
    const sortBy = sortByDate();
    expect(sortBy).toEqual({
        type : "SORT_BY_DATE",
    })
})

test('Test sort by amount',()=>{
    const sortBy = sortByAmount();
    expect(sortBy).toEqual({
        type : "SORT_BY_AMOUNT",
    })
})

test('Test Start Date',()=>{
    const startDate = setStartDate(1000)
    expect(startDate).toEqual({
        type: "SET_START_DATE",
        startDate : 1000
    })
})

test('Test End Date',()=>{
    const endDate = setEndDate(1000)
    expect(endDate).toEqual({
        type: "SET_END_DATE",
        endDate : 1000
    })
})