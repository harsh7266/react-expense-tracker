import React from "react";
import './ExpenseForm.css'
import { useState } from "react";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titlechangehandler=(event)=>{
        setEnteredTitle(event.target.value)
    }
    const amountchangehandler=(event)=>{
        setEnteredAmount(event.target.value)
    }
    const datechangehandler=(event)=>{
        setEnteredDate(event.target.value)
    }
    const submitHandler=(event)=>{
          event.preventDefault()
          const expensedata={
            id: Math.random(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
          }
        props.onsaveExpensedata(expensedata)
         
          setEnteredTitle('')
          setEnteredAmount('')
          setEnteredDate('')
    }
       return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text"  value={enteredTitle} onChange={titlechangehandler}/>
            </div>

            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min='0.01' step='0.01' value={enteredAmount} onChange={amountchangehandler} />
            </div>

            <div className="new-expense__control">
                <label>Date</label>
                <input type="date"  value={enteredDate} onChange={datechangehandler}/>
            </div>
            </div>
            
            
            <div className="new-expense__actions">
                <button type="submit">Add expense</button>
            </div>

        </form>
       )
}


export default ExpenseForm


