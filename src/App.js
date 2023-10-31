import React from 'react';

import Header from 'views/Header/Header';
import Home from 'views/Home/Home';
import About from 'views/About/About';
import Experience from 'views/Experience/Experience';
import Education from 'views/Education/Education';
import Footer from 'views/Footer/Footer';

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
