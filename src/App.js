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
          <span>
            <span>
              Shopify <img src="./asset/shopify-logo.png" alt="shopify logo" />
            </span>
            <span>
              Spacestagram <img src="./asset/spaces.png" alt="shopify logo" />
            </span>
            </span>
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
