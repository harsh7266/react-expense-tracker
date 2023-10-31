import React from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){

    function saveExpensedatahandler(enteredExpensedata){
     
        props.onAddexpense(enteredExpensedata)
           
    }
   
    return(
        <div className="new-expense">
            <ExpenseForm onsaveExpensedata={saveExpensedatahandler}></ExpenseForm>
        </div>
    )
}

export default NewExpense

