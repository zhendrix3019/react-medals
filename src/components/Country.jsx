import React from 'react';
import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Medals from './Medals';
import DeleteIcon from '@mui/icons-material/Delete';
import '../App.css';

function Country({ name, gold, silver, bronze, onIncrement, onDecrement, onDelete }) {
  const totalMedals = gold + silver + bronze;

  return (
    <Card className="country-card">
      <CardContent>
        <Typography variant="h5" component="div">
          Country: {name}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          Total Medals: {totalMedals}
        </Typography>

        <Medals type="gold" count={gold} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medals type="silver" count={silver} onIncrement={onIncrement} onDecrement={onDecrement} />
        <Medals type="bronze" count={bronze} onIncrement={onIncrement} onDecrement={onDecrement} />

        <IconButton onClick={onDelete} aria-label="delete" color="secondary" style={{ marginTop: '10px' }}>
          <DeleteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
}

export default Country;
