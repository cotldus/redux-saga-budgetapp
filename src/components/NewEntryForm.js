import React from 'react';
import { Form } from 'semantic-ui-react';
import ButtonComponent from './ButtonComponent';
import FormEntry from './FormEntry';
import useTxnDetails from '../hooks/useTxnDetails';

function NewEntryForm() {

    const {description, setDescription, value, setValue, isExpense, setIsExpense, addTransaction} = useTxnDetails();

    return (
        <Form unstackable>
                <FormEntry 
                description={description} 
                setDescription={setDescription} 
                value={value} 
                setValue={setValue} 
                isExpense={isExpense}
                setIsExpense={setIsExpense}
                />
                <ButtonComponent addTransaction={addTransaction} />
            </Form>
    )
}

export default NewEntryForm; 