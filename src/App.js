import React from "react"
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div  style={{backgroundColor: '#1c2228'}}>
        <Header/>
        <Home/>
    </div>
  );
}

export default App;
