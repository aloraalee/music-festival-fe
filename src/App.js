import React from "react";
import { Routes, Route} from 'react-router-dom';
import ScheduleContainer from '../src/ScheduleContainer.js'
import ScheduleDetails from '../src/ScheduleDetails.js'
import './App.css';

function App() {
  return (
    <main className='App'>
      <header>
        <h1>Music Festival Schedules</h1>
      </header>
      <Routes>
        <Route path='/' element={<ScheduleContainer/>}/>
        <Route path='/:id' element={<ScheduleDetails/>} />
      </Routes>
    </main>
  );
}

export default App;
