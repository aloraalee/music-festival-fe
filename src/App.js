import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import ScheduleContainer from '../src/ScheduleContainer.js'
import ScheduleDetails from '../src/ScheduleDetails.js'
import './App.css';

function App() {
    const [schedules, setSchedules] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    const location = useLocation()
  
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

    const filteredSchedules = schedules.filter(schedule =>
      schedule.attributes.title.toLowerCase().includes(searchQuery.toLowerCase())
    )

  return (
    <main className='App'>
      <header>
        <h1>Music Festival Schedules</h1>
        {location.pathname==='/' && (
          <input className='search-bar'
            type="text"
            placeholder="Search for a schedule"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
          />
        )}
      </header>
      <Routes>
        <Route path='/' element={<ScheduleContainer schedules={filteredSchedules}/>}/>
        <Route path='/:id' element={<ScheduleDetails/>} />
      </Routes>
    </main>
  );
}

export default App;
