import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate.js'
import Card from './Card'
import React from 'react'


function ExpenseItem(props){

    

    return(
        <Card className='expense-item'>
        <ExpenseDate date_={props.date}/>

            <div className='expense-item_description'>
            <h2>{props.title}</h2>
            <div className='expense-item_price'>${props.amount}</div>
           
            </div>

        </Card>

    )
}

export default ExpenseItem



