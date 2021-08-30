import React from 'react';

import About from './components/About';
import Ambassadors from './components/Ambassadors';
import Clubs from './components/Clubs';

import Contactus from './components/Contactus';
import Fail from './components/Fail';
import Index from './components/Index';



function App() {
  return (
    <main className="CSA Official Website">
      <About />
      <Ambassadors />
      <Clubs />
      <Contactus />
      <Fail />
      <Index />
      
    </main>
  );
}

export default App;
