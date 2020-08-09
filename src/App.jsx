import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import JobsState from './context/jobs/JobsState'
import Home from './components/Home';


import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.body.classList.add('bg-red-500');
  }, [])

  return (
    <JobsState>
      <div className="">
        <Router>
          <Switch>
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    </JobsState>
  );
}

export default App;
