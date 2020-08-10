import React, { useContext } from 'react'
import { useEffect } from 'react';
import JobsContext from '../context/jobs/jobsContext'
import Preloader from './Preloader'
import JobItem from './JobItem'

const Jobs = () => {

    const jobsContext = useContext(JobsContext);
    const { getJobs, loading, jobs } = jobsContext;

    useEffect(() => {
        // getJobs();
        // eslint-disable-next-line
    }, [])

    if (loading) {
        return <Preloader />
    }

    return (
        <div className='container text-center font-bold mt-3'>
            <h1 className='text-4xl mb-4'>Github | Jobs</h1>
            <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1'>
                {jobs.map(job => <JobItem key={job.id} job={job} />)}
            </div>
        </div>
    )
}

export default Jobs
