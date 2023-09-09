import React from "react";
import { useState } from "react";

import './ExpenseForm.css';

const ExpenseForm = (props) => {
   const [enteredTitle, setEnteredTitle] = useState('');
   const [enteredAmount, setEnteredAmount] = useState('');
   const [enteredDate, setEnteredDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //      enteredTitle: '',
  //      enteredAmount: '',
  //      enteredDate: ''
  // });

    const titleChangeHandler =(event) => {
        setEnteredTitle(event.target.value);
        //setUserInput({
          //  ...userInput,
          //  enteredTitle: event.targert.value
        //})

    //      setUserInput((prevState) => {
    //          return {...prevState, enteredTitle: event.target.value};
    //      })
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        //setUserInput({
         // ...userInput,
         //enteredAmount: event.target.value
        //})

        //setUserInput((prevState) => {
        //    return ({...prevState, enteredAmount: event.target.value});
       // });
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        //setUserInput({
        //    ...userInput,
        //    enteredDate: event.target.value
        //})

        //setUserInput((prevState) => {
        //    return ({...prevState, inputDate: event.target.value});
        //});
    }

    //const inputChangeHandler = (identifier, value) => {
    //   if (identifier === 'title') {
    //    setEnteredTitle(value);
    //    } else if (identifier === 'date') {
    //    setEnteredDate(value);
    //    } else {
    //    setEnteredAmount(value);
    //   }
    //};

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            date: new Date(enteredDate),
            amount: enteredAmount
        } 
        
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__constrol">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} required/>
            </div>

            <div className="new-expense__constrol" onChange={amountChangeHandler}>
                <label>Amount</label>
                <input type="number" value={enteredAmount} min='0.01' step='0.01'/>
            </div>

            <div className="new-expense__constrol">
                <label>Date</label>
                <input type="date" min='2019-01-01'  max='2023-12-31' value={enteredDate} onChange={dateChangeHandler}/>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add</button>
            </div>
        </div>
    </form>
};


export default ExpenseForm;

