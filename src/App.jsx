import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JobsState from './context/jobs/JobsState';
import Home from './components/Home';
import Navbar from './components/Navbar';


import './App.css';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-gray-900');
  }, [])

  return (
    <JobsState>
      <div className="text-white">
        <Router>
          <Navbar />
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </JobsState>
  );
}

export default App;
