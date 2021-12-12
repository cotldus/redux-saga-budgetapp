import React from 'react';
import { Button } from 'semantic-ui-react';

function ButtonComponent({addTransaction}) {
    return (
        <Button.Group style={{marginTop:20}}>
        <Button>Cancel</Button>
        <Button.Or/>
        <Button primary onClick={()=>addTransaction()}>Ok</Button>
        </Button.Group>
    )
}

export default ButtonComponent; 