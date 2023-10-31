import './ExpenseDate.css'
import React from 'react'


function ExpenseDate(props){

       const month=props.date_.toLocaleString('en-US',{month:'long'})
       const year=props.date_.getFullYear()
       const day=props.date_.toLocaleString('en-US',{day:'2-digit'})


    return (
         <div>
              <div className='expense-date'>
                <div className='expense-date__year'>{year}</div>
                <div className='expense-date__month'>{month}</div>
                <div className='expense-date__day'>{day}</div>
            </div>
         </div>
    )
}


export default ExpenseDate



