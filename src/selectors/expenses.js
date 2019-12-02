// get visible expenses 

//a test to show if the filter can see the elements existing in the expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {

    const filteredExpenses =
        expenses.filter((expense) => {
            const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
            const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
            const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

            return startDateMatch && endDateMatch && textMatch;
        });
    return filteredExpenses.sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt > b.createdAt ? 1 : -1;
        } else
            if (sortBy === 'amount') {
                return a.amount > b.amount ? -1 : 1;
            }
    });
};

