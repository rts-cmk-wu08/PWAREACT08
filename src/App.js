import React from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt'
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
    <PWAPrompt copyTitle="Føj til hjemmeskærm"/>
    </>
  );
}

export default App;
