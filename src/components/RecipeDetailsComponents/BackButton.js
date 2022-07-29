import React from 'react';
import { Fab } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useHistory } from 'react-router-dom';

function BackButton() {
  const history = useHistory();

  const handleBackButton = () => {
    history.goBack();
  };

  return (
    <Fab
      aria-label="back"
      onClick={ handleBackButton }
      sx={ { position: 'absolute', left: -250, top: -235 } }
    >
      <ArrowBackIcon />
    </Fab>
  );
}

export default BackButton;
