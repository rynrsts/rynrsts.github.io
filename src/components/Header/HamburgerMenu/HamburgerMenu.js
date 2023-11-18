import React, { useEffect } from 'react';

import 'components/Header/HamburgerMenu/HamburgerMenu.css';

const HamburgerMenu = () => {
  useEffect(() => {
    const hamburger = document.querySelector('.header-hamburger');
    const navList = document.querySelector('.header-nav .header-nav-list');
    const navListLinks = document.querySelectorAll(
      '.header-nav .header-nav-list li'
    );

    hamburger.addEventListener('click', () => {
      navList.classList.toggle('nav-open');
      navListLinks.forEach((link) => {
        link.classList.toggle('nav-fade');
      });
      hamburger.classList.toggle('nav-toggle');
    });

    navList.addEventListener('click', () => {
      navList.classList.toggle('nav-open');
      navListLinks.forEach((link) => {
        link.classList.toggle('nav-fade');
      });
      hamburger.classList.toggle('nav-toggle');
    });
  });

  return (
    <div className='header-hamburger' id='header-hamburger'>
      <div className='line1'></div>
      <div className='line2'></div>
      <div className='line3'></div>
    </div>
  );
};

export default HamburgerMenu;
