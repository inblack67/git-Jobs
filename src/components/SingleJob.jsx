import React, { useContext, useEffect } from 'react'
import JobsContext from '../context/jobs/jobsContext'
import Preloader from './Preloader'
import JobItem from './JobItem'

const SingleJob = ({ match }) => {

    useEffect(() => {
        let mounted = true;

        if(mounted){
            getJobById(match.params.id);
        }

        return () => {
            mounted = false;
        }
        // eslint-disable-next-line
    },[])

    const jobsContext = useContext(JobsContext);
    const { getJobById, loading, job } = jobsContext;

    if(loading){
        return <Preloader />
    }

    return (
        <div className='container'>
            { job && <JobItem job={job} /> }
        </div>
    )
}

export default SingleJob
