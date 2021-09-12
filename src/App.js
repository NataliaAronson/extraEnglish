import React from'react';
import './App.css';
import VerbsCard from './components/VerbsCard/VerbsCard';
import VocList from './components/vocList/vocList';

function App() {
  return (
    <div className="App">
    
     <h1> Learn English</h1>
       <VerbsCard/>  
      <VocList/>

     
    </div>
  );
}

export default App;
