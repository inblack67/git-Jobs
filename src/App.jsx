import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JobsState from './context/jobs/JobsState';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import SearchJobs from './components/SearchJobs';

import './App.css';

function App() {

  useEffect(() => {
    document.body.classList.add('font-mono');
  }, [])

  return (
    <JobsState>
      <div className="text-white">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/search-jobs' component={SearchJobs} />
            <Route exact path='/about' component={About} />
          </Switch>
        </Router>
      </div>
    </JobsState>
  );
}

export default App;
