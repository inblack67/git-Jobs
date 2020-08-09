import React, { useContext } from 'react'
import { useEffect } from 'react';
import JobsContext from '../context/jobs/jobsContext'

const Jobs = () => {

    const jobsContext = useContext(JobsContext);
    const { getJobs } = jobsContext;

    useEffect(() => {
        getJobs();
        // eslint-disable-next-line
    },[])

    return (
        <div>
            <h1>jobs</h1>
        </div>
    )
}

export default Jobs
