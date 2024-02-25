import React from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Header from './components/Header/Header';
import Container from './components/Container/Container';

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Container />
      </div>
    
    </>
  );
};

export default App;