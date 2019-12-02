import filterExpenses from '../../selectors/expenses'

test('filter Expenses by text working', () => {
    const expense = [{
        id: "123abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }, {
        id: "abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }];

    const filters = {
        text: "go",
        sortby: "date",
        startDate: "",
        endDate: ""
    }
    const expenseFiltered = filterExpenses(expense, filters)
    expect(expenseFiltered).toEqual([{
        id: "123abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }, {
        id: "abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }])
})

test('filter Expenses by creation date working', () => {
    const expense = [{
        id: "123abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }, {
        id: "abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 100
    }];

    const filters = {
        text: "go",
        sortby: "date",
        startDate: "",
        endDate: ""
    }
    const expenseFiltered = filterExpenses(expense, filters)
    expect(expenseFiltered).toEqual([{
        id: "123abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 1000
    }, {
        id: "abc",
        description: "good expense",
        note: "23",
        amount: 2134,
        createdAt: 100
    }])
})