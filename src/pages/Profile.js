import React, { useEffect, useState } from 'react';
import { Stack, Typography } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import profileImage from '../images/profile.png';
import { readStorageUserData } from '../services/userLocalStorage';
import { ProfileMenu } from '../components/ProfileComponents';

function Profile() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(readStorageUserData().email);
  }, []);

  return (
    <div>
      <Header pageTitle="Profile" showSearchIcon={ false } />
      <Stack
        spacing={ 1 }
        alignItems="center"
        justifyContent="center"
        sx={ { height: '80vh' } }
      >
        <img
          src={ profileImage }
          alt="Imagem de perfil"
          style={ { width: '100px' } }
        />
        <Typography variant="overline" data-testid="profile-email">
          {email}
        </Typography>
        <ProfileMenu />
      </Stack>
      <Footer />
    </div>
  );
}

export default Profile;
