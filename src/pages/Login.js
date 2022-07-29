import React, { useState, useEffect, useContext } from 'react';
import { Box, Button, Container, Stack, TextField } from '@mui/material';
import { saveStorageUserData } from '../services/userLocalStorage';
import RecipesContext from '../context/RecipesContext';
import loginImage from '../images/login.png';
import { AppTitle } from '../styles/StyledComponents';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const { handlePageOn } = useContext(RecipesContext);

  useEffect(() => {
    const handleDisabled = () => {
      const isValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
      const six = 6;

      if (password.length > six && email.match(isValid)) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
    };
    handleDisabled();
  }, [email, password]);

  const handleLogin = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    saveStorageUserData(email);
    handlePageOn('/foods');
  };

  return (
    <Container
      style={ { width: '360px', height: '100vh', backgroundColor: '#c7ede8' } }
    >
      <Box>
        <img
          src={ loginImage }
          alt="logo"
          style={ { width: '360px', marginLeft: '-30px', marginBottom: '-40px' } }
        />
        <AppTitle variant="h2" sx={ { textAlign: 'center' } }>
          BE A CHEF
        </AppTitle>
      </Box>
      <Stack spacing={ 1 } marginTop={ 9 }>
        <TextField
          variant="filled"
          label="Email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
          data-testid="email-input"
        />
        <TextField
          variant="filled"
          type="password"
          label="Password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
          data-testid="password-input"
        />
        <Button
          fullWidth
          variant="contained"
          disabled={ disabled }
          onClick={ handleLogin }
          data-testid="login-submit-btn"
        >
          Enter
        </Button>
      </Stack>
    </Container>
  );
}

export default Login;
