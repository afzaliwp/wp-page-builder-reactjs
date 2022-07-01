import React from 'react';
import { Container, Grid } from '@mui/material';

export default function App() {
  return (
    <Container className="app-container" maxWidth="xl">
      <Grid container spacing={2}>
        <Grid xs={8}>xs=8</Grid>
        <Grid xs={4}>xs=4</Grid>
        <Grid xs={4}>xs=4</Grid>
        <Grid xs={8}>xs=8</Grid>
      </Grid>
    </Container>
  )
}
