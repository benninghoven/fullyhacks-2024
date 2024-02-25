import React from 'react';
import './App.css';
import Chat from './Chat';
import Header from './Header';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Chat />
    </div>
  );
};

export default App;