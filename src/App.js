import Expenses from "./components/Expenses.js"
import React,{useState} from 'react'
import NewExpense from './components/NewExpense/NewExpense.js'

let dummy=[
  {
  id:Math.random(),
  date: new Date(19,6,2000),
  title:'food',
  amount:5
  }

]

function App() {

     const [expenses, setexpenses] = useState(dummy)
      

    

     const addExpensehandler=(expense)=>{
        const updatedExpense=[expense,...expenses]
       setexpenses(updatedExpense)
     }
    


     return (

      <div>

        <NewExpense onAddexpense={addExpensehandler}></NewExpense>
       <Expenses item={expenses}/>
        
     
     </div>
     )
}

export default App



