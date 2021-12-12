import React from 'react';
import { Segment, Grid, Icon } from 'semantic-ui-react';
import { useDispatch }from 'react-redux';
import { TXN_REMOVED } from '../actions/txn.actions';
import { EDIT_MODAL_OPENED } from '../actions/modal.action';

function DisplayTransaction({id, isExpense=false, description, value}) {

    const dispatch = useDispatch()

    return (
        <>
        <Segment color={isExpense ? "red" : "green"}>
                <Grid color={isExpense? "red" : "green"}>
                <Grid columns={3} textAlign='right'>
                    <Grid.Row>
                        <Grid.Column width={10} textAlign='left'>{/* Always Add to 16 */}
                            {description}
                        </Grid.Column>
                        <Grid.Column width={3} textAlign='right'>
                            {"$" + String(value.toFixed(2))}
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Icon name="edit" style={{marginRight:15}} onClick={()=> dispatch(EDIT_MODAL_OPENED(id))}/>
                            <Icon name='trash' onClick={()=> dispatch(TXN_REMOVED(id))} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                </Grid>
        </Segment>
        </>
    )
}

export default DisplayTransaction; 