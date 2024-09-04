import React, { useState } from 'react';
import { Fab, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function NewCountry({ onAddCountry }) {
  const [open, setOpen] = useState(false);
  const [countryName, setCountryName] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCountryName('');
  };

  const handleSave = () => {
    if (countryName.trim()) {
      onAddCountry(countryName.trim());
      handleClose();
    }
  };

  const handleInputChange = (e) => {
    setCountryName(e.target.value);
  };

  return (
    <div>
      <Fab color="primary" aria-label="add" onClick={handleClickOpen} style={{ position: 'fixed', bottom: 16, right: 16 }}>
        <AddIcon />
      </Fab>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add New Country</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Country Name"
            type="text"
            fullWidth
            value={countryName}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary" disabled={!countryName.trim()}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default NewCountry;
