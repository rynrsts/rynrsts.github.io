import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';

import 'components/Home/Home.css';
import { particlesOptions } from 'utilities/constants/particlesOptions';
import Introduction from 'components/Home/Introduction/Introduction';

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <div className='home-div'>
      <div className='home-absolute' id='home-absolute'></div>
      <Particles
        id='tsparticles'
        init={particlesInit}
        options={particlesOptions}
      />
      <Introduction />
    </div>
  );
};

export default Home;
