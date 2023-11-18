import React from 'react';

import 'Style.css';
import Header from 'components/Header/Header';
import Home from 'components/Home/Home';
import About from 'components/About/About';
import Experience from 'components/Experience/Experience';
import Education from 'components/Education/Education';
import Footer from 'components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Home />
      <About />
      <Experience />
      <Education />
      <Footer />
    </React.Fragment>
  );
}

export default App;
