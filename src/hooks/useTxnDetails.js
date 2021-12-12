import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { TXN_ADDED, TXN_UPDATED } from "../actions/txn.actions";
import {v4 as uuidv4} from 'uuid';
import { EDIT_MODAL_CLOSED } from "../actions/modal.action";

const useTxnDetails = (desc="", val="", isExp=true) => {
    const [description, setDescription] = useState(desc);
    const [value, setValue] = useState(val);
    const [isExpense, setIsExpense] = useState(isExp);
    const dispatch = useDispatch()

    useEffect(()=>{
        setDescription(desc);
        setValue(val);
        setIsExpense(isExp);
    }, [desc, val, isExp])

    const addTransaction = () => {

        dispatch(
            TXN_ADDED({
                id: uuidv4(),
                description,
                value: parseFloat(value),
                isExpense
            })
        );
        resetForm();

    }

        const resetForm = () => {
        setDescription("");
        setValue();
        setIsExpense(true);
    }

    const updateTransaction = id => {
        dispatch(TXN_UPDATED(
            id, 
            {
                id,
                description,
                value: parseFloat(value),
                isExpense
            }
        ));
        dispatch(EDIT_MODAL_CLOSED());      
        resetForm();  
    }

    return {
        description, setDescription, value, setValue, isExpense, setIsExpense, addTransaction, updateTransaction
    }
}

export default useTxnDetails;