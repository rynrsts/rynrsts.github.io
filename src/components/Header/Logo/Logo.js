import React from 'react';
import { Avatar, Link } from '@mui/material';

import 'components/Header/Logo/Logo.css';
import logoLight from 'assets/logo-light.png';

const Logo = () => {
  return (
    <div className='logo-container'>
      <Link href='https://rynrsts.github.io/'>
        <Avatar
          alt='Logo (Light)'
          src={logoLight}
          sx={{ height: '75%', width: '75%' }}
        />
      </Link>
    </div>
  );
};

export default Logo;
