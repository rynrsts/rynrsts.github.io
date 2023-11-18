import React, { useEffect } from 'react';
import { Container } from '@mui/material';

import 'components/Header/Header.css';
import Logo from 'components/Header/Logo/Logo';
import HamburgerMenu from 'components/Header/HamburgerMenu/HamburgerMenu';
import Navigation from 'components/Header/Navigation/Navigation';

const Header = () => {
  useEffect(() => {
    const headerNav = document.getElementById('header-nav').classList;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting;
        intersecting
          ? headerNav.remove('header-box-shadow')
          : headerNav.add('header-box-shadow');
      });
    });

    observer.observe(document.getElementById('home-absolute'));
  });

  return (
    <nav className='header-nav' id='header-nav'>
      <Container
        maxWidth='lg'
        sx={{ height: '100%', display: 'flex', padding: 0 }}
      >
        <Logo />
        <HamburgerMenu />
        <Navigation />
      </Container>
    </nav>
  );
};

export default Header;
