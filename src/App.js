import React from 'react';
import { Header, Sidebar, Feed, Widgets } from './components';
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />

      <div className='app__body'>
        <Sidebar />
        <Feed />
        <Widgets />
      </div>
    </div>
  );
}

export default App;
