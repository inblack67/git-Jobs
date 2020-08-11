import React, { Fragment, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import JobsContext from '../context/jobs/jobsContext'
import JobItem from './JobItem'
import Preloader from './Preloader'

const SearchJobs = () => {

    const [submitting, setSubmitting] = useState(false);

    const { handleSubmit, errors, register } = useForm();

    const jobsContext = useContext(JobsContext);
    const { searchJobs, searchedJobs } = jobsContext;

    if(submitting){
        return <Preloader />
    }

    return (
        <div className='container mx-auto mt-8'>

            <p className='text-xl font-semibold uppercase text-center'>Search Jobs</p>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(formData => {
                    setSubmitting(true);

                    searchJobs(formData);

                    setSubmitting(false);
                })} className='text-black p-2 w-full'>
                    <div className='py-4'>
                        <input type="text" name='description' placeholder='React, Node etc.' ref={register({
                            required: 'Required!'
                        })} className='shadow border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline text-lg' />
                        <label htmlFor="description" className='block text-gray-400 py-2'>Description</label>
                        {errors.description ? <span className="text-red-500 upper font-bold text-lg">
                            {errors.description.message}
                        </span> : null}
                    </div>
                    <div className='py-4'>
                        <input type="text" name='location' placeholder='City, Zip etc.' ref={register({
                            required: 'Required!'
                        })} className='shadow border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline text-lg' />
                        <label htmlFor="location" className='block text-gray-400 py-2'>Location</label>
                        {errors.location ? <span className="text-red-500 upper font-bold text-lg">
                            {errors.location.message}
                        </span> : null}
                    </div>
                    <div className='pb-6 flex'>
                        <input type="checkbox" name='fulltime' ref={register()} className='focus:outline-none rounded h-6 w-6' />
                        <label htmlFor="fulltime" className='text-gray-400 px-2'>Fulltime?</label>
                    </div>
                    <div>
                        <button type="submit" className='btn bg-red-500 text-white' disabled={submitting}>
                            Search
                    </button>
                    </div>
                </form>
            </div>
            <Fragment>
                <h1 className='font-hairline text-center my-2'>Search Results: <span className="text-red-500 text-xl">
                    {searchedJobs.length}</span></h1>
                <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1">
                    {searchedJobs.length > 0 && searchedJobs.map(job => <JobItem key={job.id} job={job} />)}
                </div>
            </Fragment>
        </div>
    )
}

export default SearchJobs
