import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import ScheduleContainer from '../src/ScheduleContainer.js'
import ScheduleDetails from '../src/ScheduleDetails.js'
import './App.css';

function App() {
    const [schedules, setSchedules] = useState([])
  
    useEffect( () => {
      getSchedules()
    }, [])
  
    function getSchedules() {
      fetch("/api/v1/schedules")    
      .then(response => response.json())
      .then(data => {
        setSchedules(data.data || [])
        console.log('data', data)
      })
      .catch(error => console.log(error))
    }

  return (
    <main className='App'>
      <header>
        <h1>Music Festival Schedules</h1>
      </header>
      <Routes>
        <Route path='/' element={<ScheduleContainer schedules={schedules}/>}/>
        <Route path='/:id' element={<ScheduleDetails/>} />
      </Routes>
    </main>
  );
}

export default App;
