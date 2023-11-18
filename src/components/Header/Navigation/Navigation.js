import React from 'react';

import 'components/Header/Navigation/Navigation.css';
import { NavigationList as navigationList } from 'utilities/constants/constants';

const Navigation = () => {
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

  return <ul className='header-nav-list'>{navigationListRender}</ul>;
};

export default Navigation;
