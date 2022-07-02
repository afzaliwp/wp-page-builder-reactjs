import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import Row from './Row';
import { useAppState } from '../../state';

export default function App() {
  const { state, dispatch } = useAppState();

const addNewRow = () => {
  dispatch( {
    type: 'ADD_ROW',
    payload: {}
  } );
}

  return (
    <Container className="app-container" maxWidth="xl">
      <Grid container>
      { state.rows.map( ( row ) => { <Row /> } ) }
      </Grid>
      <Button onClick={ addNewRow } variant='contained' color='primary'>
        + Add new row
      </Button>
    </Container>
  )
}
