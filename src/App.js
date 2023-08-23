import React, {useEffect} from 'react';

import './App.css';
import { Outlet } from 'react-router-dom';
import PWAPrompt from 'react-ios-pwa-prompt'
import { Link } from 'react-router-dom';
import OneSignal from 'react-onesignal';
function App() {
  useEffect(() => {
    OneSignal.init({appId: process.env.REACT_APP_ONESIGNAL})
  }, []);
  return (
    <>
    <header>
        <p>this is header</p>
        <nav>
          <Link to="/">home</Link> &nbsp; &nbsp;
        <Link to="/location">Location</Link>
        </nav>
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
