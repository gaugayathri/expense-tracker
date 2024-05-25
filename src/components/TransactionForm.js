import React,{useState} from 'react'
import  uniqueId  from '../utils'

const TransactionForm = ({newTransaction}) => {
  let [name,setName]=useState('')
  let [amount,setAmount]=useState('')

let addTransaction=(type,e)=>{
  e.preventDefault()
  const data={id:uniqueId,name:name,amount:parseInt(amount),type:type}
        newTransaction(data)
        console.log(uniqueId)
    setName("")
    setAmount("")    
}

  return (
    <div>
        <h2>Add Transaction History</h2>
        <form className='transaction-form'>
            <label>Name</label>
            <div>
                <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <label>Amount</label>
            <div>
                <input type='number' value={amount} onChange={(e)=>setAmount(e.target.value)}/>
            </div>
               <br/><br/>
            <div>
            <button   className='income-btn' onClick={(e)=>addTransaction('income',e)}>Add Income</button>
            <button  className='expense-btn' onClick={(e)=>addTransaction('expense',e)}>Add Expense</button>
            </div>
            
        </form>
    </div>
  )
}

export default TransactionForm