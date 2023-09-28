import React, { useState } from 'react';
import Nav from './components/Nav';
import Merger from './components/Merger';
import CopyToClipboard from 'react-copy-to-clipboard';

const App = () => {

  return (
    <div className="App pt-[23px] px-[30px] sm:flex sm:p-[0px]">
      <Nav />
      <Merger />
    </div>
  );
};

export default App;
