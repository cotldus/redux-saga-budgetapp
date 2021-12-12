import './App.css';
import {useState, useEffect} from 'react'
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import IncomeExpenseBalance from './components/IncomeExpenseBalance';
import NewEntryForm from './components/NewEntryForm';
import ListTransactions from './components/ListTransactions';
import EditModal from './components/EditModal'

import {useSelector, useDispatch} from 'react-redux'
import { TXN_RECEIVED } from './actions/txn.actions';


function App() {
    const [monthlyBalance, setMonthlyBalance] = useState(0);
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [txn, setTxn] = useState();

    const transactions = useSelector(state => state.transactions)    
    // React // const [transactions, setTransactions] = useState(initialTransactions)
    
    const {isOpen, id} = useSelector(state => state.modal)  
    // React // const  [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const index = transactions.findIndex(txn => txn.id === id)
        setTxn(transactions[index])
    },[isOpen, id, transactions])

    useEffect(()=>{

        let totalIncome = 0;
        let totalExpense = 0;
        transactions.map(transaction => {
            if (transaction.isExpense) {
                return totalExpense += transaction.value;
            } 
            
            return totalIncome += transaction.value;

        })

        let balance = totalIncome-totalExpense;

        setMonthlyBalance(balance);
        setIncome(totalIncome);
        setExpense(totalExpense);

        console.log(totalExpense)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [transactions]);




    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(TXN_RECEIVED())
    },[dispatch])    



    return (
        <Container>
            <MainHeader title="Sage Budget"/>
            <DisplayBalance title="Your Balance:" balance={"$" + monthlyBalance.toFixed(2)} size="small"/>
            <IncomeExpenseBalance income={income} expense={expense}/>

            <MainHeader title="History" type='h3'/>
            {/* <DisplayTransaction description={transactions[0].description} value={transactions[0].value}  isExpense={transactions[0].isExpense} /> */}
            <ListTransactions transactions={transactions} />
            <MainHeader title="Add new transaction" type='h3'/>
            <NewEntryForm />
            <EditModal isOpen={isOpen} {...txn}/>

        </Container>
    );
}

export default App;
