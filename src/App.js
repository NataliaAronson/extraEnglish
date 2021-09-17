import React from'react';
import './App.css';
import VerbsCard from './components/VerbsCard/VerbsCard';
import ListFrame from "./components/VocList/ListFrame";


function App() {
  return (
    <div className="App">
    
     <h1> Learn Irregular verbs</h1>
     
       <VerbsCard/>  
       <ListFrame />
  
    </div>
  );
}

export default App;
