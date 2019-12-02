import React, { useState } from 'react';
import { addExpense } from '../actions/expenses';
import { connect } from 'react-redux'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";


const ExpenseAdd = (props) => {

  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [amount, setAmount] = useState('');
  const [createdAt, setCreationDate] = useState(new Date());


  const handleAdd = (e) => {
    e.preventDefault();
    if (description && amount) {
      props.dispatch(addExpense({
        description,
        note,
        amount,
        createdAt: Number(createdAt)
      }));
    props.history.push('/')
    }else{
      alert ("please fill the amount or description")
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
      <form onSubmit={handleAdd}>
        Description :<br />
        <input type="text" autoFocus placeholder="put a description" onChange={onDescriptionChange} ></input><br />
        Amount :<br />
        <input type="number" placeholder="price of the product" onChange={onAmountChange} ></input><br />
        Note :<br />
        <input type="text" placeholder="add a note (optional)" onChange={onNoteChange} ></input><br />
        Date : <br />
        <DatePicker
          dateFormat="dd/MM/yyyy"
          selected={createdAt}
          onChange={date => setCreationDate(date)}
        />
        <br />
        <input type="submit" value='Add Item' />
      </form>
    </div>
  )
}



export default connect()(ExpenseAdd);  