import React from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <header>
        <p>this is header</p>
    </header>
    <main>
        <Outlet/>
    </main>
    <footer>
        <p>do it properly</p>
    </footer>
    </>
  );
}

export default App;
