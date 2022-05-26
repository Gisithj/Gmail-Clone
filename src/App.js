import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


function App() {
  return (
      <div className="App">
        <Header/>
        <div className="app_body">
            <Sidebar/>
            <Outlet/>  
            
        </div>
      </div>
  );
}

export default App;
