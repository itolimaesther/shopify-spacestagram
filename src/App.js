import React from 'react';
import './App.css';
import SpacesCard from './components/SpacesCard';
import SpaceContextProvider from './context/SpaceContext';
import { Notifications } from 'react-push-notification';



function App() {
  

  return (
    <SpaceContextProvider>
      <div className="App">
        <header>
          <h1>Spacestagram</h1>
          <p>Brought to you by NASA's Astronomy Photos of the Day(APOD) API</p>
        </header>
        <main>
          <Notifications />
          <SpacesCard />
        </main>
      </div>
    </SpaceContextProvider>
  );
}

export default App;
