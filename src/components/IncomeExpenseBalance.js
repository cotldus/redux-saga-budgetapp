import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance'

function IncomeExpenseBalance({income, expense}) {
    return (
        <Segment textAlign='center'>
                <Grid columns={2} divided>
                    <Grid.Row>
                        <Grid.Column>
                        <DisplayBalance title="Income:" balance={"$" + income.toFixed(2)} color='green'/>
                        </Grid.Column>
                        <Grid.Column>
                        <DisplayBalance title="Expense:" balance={"$" + expense.toFixed(2)} color='red'/>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>
    )
}

export default IncomeExpenseBalance; 