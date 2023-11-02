import React, { useEffect } from 'react';
import { Avatar, Container, Link } from '@mui/material';

import 'views/Header/Header.css';
import logoLight from 'assets/logo-light.png';
import { NavigationList as navigationList } from 'utilities/data';
import HamburgerMenu from 'components/HamburgerMenu/HamburgerMenu';

const Header = () => {
  const navigationListRender =
    navigationList &&
    Object.keys(navigationList).map((key) => (
      <li key={key}>
        <a href={'#' + (key !== 'home' ? key : '')}>
          <i className={navigationList[key]} />
          <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
        </a>
      </li>
    ));

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
        <div className='logo-container'>
          <Link href='https://rynrsts.github.io/'>
            <Avatar
              alt='Logo (Light)'
              src={logoLight}
              sx={{ height: '75%', width: '75%' }}
            />
          </Link>
        </div>
        <HamburgerMenu />
        <ul className='header-nav-list'>{navigationListRender}</ul>
      </Container>
    </nav>
  );
};

export default Header;
