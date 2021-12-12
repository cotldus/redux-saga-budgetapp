import React from 'react';
import DisplayTransaction from './DisplayTransaction';


function ListTransactions({transactions, isOpen}) {
    return (
        <>
        {transactions.map((transaction)=> (
            <DisplayTransaction 
            isOpen={isOpen} 
            key={transaction.id}
            {...transaction} 
            />
        ))}
        </>
    )
}

export default ListTransactions; 