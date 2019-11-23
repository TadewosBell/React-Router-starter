import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import SideNav from './SideNav/SideNav';
import TestRouter from './Router/TestRouter';
import AdminRouter from './Router/AdminRouter';
import './App.css';

let role = 'Admin';

function App() {
  return (
    <BrowserRouter>
    <SideNav role={role}/>
      <div className="App">
      {
        role === 'Admin'
        && <AdminRouter />
      }
      {
        role === 'Test'
        &&  <TestRouter />
      }
    
      </div>
    </BrowserRouter>
  );
}

export default App;
