import React from "react"
import {shallow} from "enzyme"
import {ExpenseList} from "../../Components/ExpenseList"
import expenses from "../fixtures/expenses"

it("Test Expense list",()=>{
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot(); 
})

