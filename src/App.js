import React from'react';
import './App.css';
import Gallery from './components/VerbsCard';
import VocList from './components/vocList/vocList';

function App() {
  return (
    <div className="App">
    
     <h1> Learn English</h1>
       <Gallery/>  
      <VocList/>

     
    </div>
  );
}

export default App;
