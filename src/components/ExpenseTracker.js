import React,{useEffect, useState} from 'react'
import Expense from './Expense'
import TransactionHistory from './TransactionHistory'
import TransactionForm from './TransactionForm'

const TransactionData=[
    
]


const ExpenseTracker = () => {
    const [income,setIncome]=useState(0)
    const [expense,setExepense]=useState(0)
    const [transaction,setTransaction] =useState(TransactionData)


    const calculateTransaction=()=>{
        let income=0,expense=0;
        transaction.forEach((data)=>{
            if(data.type==='income'){
                income+=data.amount
            }
            else if(data.type==='expense'){
               expense+=data.amount
            }
        })
        setIncome(income)
        setExepense(expense)
        saveState()
    }
useEffect(()=>{
    let localstate=JSON.parse(localStorage.getItem('expense-tracker'))
    if(localstate){
        setTransaction(localstate)
    }else{
        calculateTransaction()
    }
},[])
    

    useEffect(()=>{
        calculateTransaction()
    },[transaction])


 let saveState=()=>{
    localStorage.setItem('expense-tracker',JSON.stringify(transaction))
 }   

let AddnewTransaction=(item)=>{
        let clonetransaction=[...transaction,item]
        setTransaction(clonetransaction)
}
let deleteTransaction=(id)=>{
    let deleteArray=transaction.filter((item)=>item.id !==id)
    setTransaction(deleteArray)
    
}
    return (
        <div>
            <h1>ExpenseTracker</h1>
            <Expense income={income} expense={expense}/>
            <TransactionHistory transaction={transaction} handleDelete={deleteTransaction}/>
            <TransactionForm  newTransaction={AddnewTransaction} />
        </div>
    )
}

export default ExpenseTracker