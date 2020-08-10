import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// context
import JobsState from './context/jobs/JobsState';

// components
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import SearchJobs from './components/SearchJobs';
import SingleJob from './components/SingleJob';
import NotFound from './components/NotFound';

// style
import './App.css';

function App() {

  useEffect(() => {
    document.body.classList.add('font-mono', 'bg-gray-900');
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
            <Route exact path='/jobs/:id' component={SingleJob} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    </JobsState>
  );
}

export default App;
