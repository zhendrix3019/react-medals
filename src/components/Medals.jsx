import React from 'react';
import { Button } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import '../App.css';

function Medals({ type, count, onIncrement, onDecrement }) {
  return (
    <div className="medal-container">
      <h3 className="medal-title">
        {type.charAt(0).toUpperCase() + type.slice(1)}: {count}
      </h3>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => onIncrement(type)} 
        startIcon={<AddCircleOutlineIcon />}
        className="medal-button"
      >
        Increment
      </Button>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => onDecrement(type)} 
        startIcon={<RemoveCircleOutlineIcon />}
        disabled={count === 0}
      >
        Decrement
      </Button>
    </div>
  );
}

export default Medals;
