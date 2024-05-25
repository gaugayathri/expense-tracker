import React from 'react'

const TransactionHistory = ({transaction,handleDelete}) => {
  return (
    <div>
      <h2>Transaction History</h2>  
      <ul className='transactions'>
        {
          transaction.map((data)=><li key={data.id}>{data.name} ${data.amount}
          <button onClick={()=>handleDelete(data.id)}>x</button>
          </li>)
        }
        
      </ul>
    </div>
  )
}

export default TransactionHistory