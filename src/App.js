import React from 'react';
import Board from './components/Board';
import Header from './components/Header';
import './App.css';

export default function App() {
  return (
    <>
    <div className="flex flex-col">
      <Header />
    </div>
    <div className="p-4 flex-wrap"> {/* //flex-grow */}
        <Board />
      </div>
      </>
    
  );
}
