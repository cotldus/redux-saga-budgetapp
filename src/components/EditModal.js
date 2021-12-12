import React from 'react';
import { Modal, Button} from 'semantic-ui-react';
import FormEntry from './FormEntry';
import { useDispatch } from 'react-redux';
import { EDIT_MODAL_CLOSED } from '../actions/modal.action';
import useTxnDetails from '../hooks/useTxnDetails';


function EditModal({isOpen, description, value, isExpense, id}) {
    const dispatch = useDispatch();
    const txnUpdateDetails = useTxnDetails(description, value, isExpense);
    console.log(isOpen)
    return (
        <Modal open={isOpen}>
            <Modal.Header> Edit Transaction</Modal.Header>
            <Modal.Content>
                <FormEntry 
                description={txnUpdateDetails.description} 
                setDescription={txnUpdateDetails.setDescription} 
                value={txnUpdateDetails.value} 
                setValue={txnUpdateDetails.setValue} 
                isExpense={txnUpdateDetails.isExpense}
                setIsExpense={txnUpdateDetails.setIsExpense}
                />
            </Modal.Content>
            <Modal.Actions>
                <Button onClick= {() => dispatch(EDIT_MODAL_CLOSED())}>Close</Button>
                <Button onClick= {() => txnUpdateDetails.updateTransaction(id)} primary>Update Transaction</Button>
            </Modal.Actions>

        </Modal>
    )
}

export default EditModal; 