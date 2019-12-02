import React, { useState } from 'react';
import { editExpense, removeExpense } from '../actions/expenses';
import { connect } from 'react-redux'
import DatePicker from 'react-datepicker'


const ExpenseEdit = (props) => {

  const [description, setDescription] = useState(props.expense ? props.expense.description : '');
  const [note, setNote] = useState(props.expense ? props.expense.note : '');
  const [amount, setAmount] = useState(props.expense ? props.expense.amount : '');
  const [createdAt, setCreationDate] = useState(props.expense ? props.expense.createdAt : new Date());

  const handleDelete = () => {
    if (description && amount) 
      props.dispatch(removeExpense(props.expense.id))
    props.history.push('/')
  }

  const handleEdit = (e) => {
    e.preventDefault();
    if (description && amount) {
      props.dispatch(editExpense(props.expense.id, {
        description,
        note,
        amount,
        createdAt: Number(createdAt)
      }));
      props.history.push('/')
    } else {
      alert("please fill the amount or description")
      props.history.push('/')
    }
  };

  const onDescriptionChange = (e) => {
    const description = e.target.value;
    setDescription(description)
  }

  const onNoteChange = (e) => {
    const note = e.target.value;
    setNote(note);
  }

  const onAmountChange = (e) => {
    const amount = e.target.value
    setAmount(amount)
  }



  return (
    <div>
     <h2> this is the Expense Edit {props.match.params.id} </h2>
      <form onSubmit={handleEdit}>
        Description :<br />
        <input type="text" autoFocus value={description} placeholder="put a description" onChange={onDescriptionChange} ></input><br />
        Amount :<br />
        <input type="number" value={amount} placeholder="price of the product" onChange={onAmountChange} ></input><br />
        Note :<br />
        <input type="text" value={note} placeholder="add a note (optional)" onChange={onNoteChange} ></input><br />
        Date : <br />
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={createdAt}
          showYearDropdown
          showMonthDropdown
          onChange={date => setCreationDate(date)}
        />
        <br />
        <input type="submit" value='Submit Editing' />
      </form>
      <button onClick={handleDelete} >Delete Item</button>
    </div>
  )
}

const mapToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  }
}

export default connect(mapToProps)(ExpenseEdit);  