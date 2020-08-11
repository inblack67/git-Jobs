import React, { useContext, Fragment } from 'react'
import { useEffect } from 'react';
import JobsContext from '../context/jobs/jobsContext'
import Preloader from './Preloader'
import JobItem from './JobItem'
import InfiniteScroll from 'react-infinite-scroller'

const Jobs = () => {

    const jobsContext = useContext(JobsContext);
    const { getJobs, loading, jobs, fetchFurtherJobs } = jobsContext;

    useEffect(() => {
        getJobs();
        // eslint-disable-next-line
    }, [])

    const fetchMore = () => {
        fetchFurtherJobs();
    }

    if (loading) {
        return <Preloader />
    }

    return (
        <Fragment>
            <div className='container mx-auto text-center font-bold mt-3'>
                <h1 className='text-4xl mb-4'>Github | Jobs</h1>
                <InfiniteScroll pageStart={0} loadMore={fetchMore} hasMore={true} loader={<Preloader key={0} />}>
                    <div className='grid lg:grid-cols-2 gap-4 sm:grid-cols-1'>
                        {jobs.length > 0 && jobs.map(job => <JobItem key={job.id} job={job} />)}
                    </div>
                </InfiniteScroll>
            </div>
        </Fragment>
    )
}

export default Jobs
