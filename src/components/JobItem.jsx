import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import JobsContext from '../context/jobs/jobsContext'

const JobItem = ({ job: { company, company_logo, company_url, description, how_to_apply, location, title, type, url, id } }) => {

    const jobsContext = useContext(JobsContext);
    const { loading, getJobsById } = jobsContext;

    const onClick = e => {
        getJobsById(id);
    }

    return (
        <div className='rounded-lg overflow-hidden border bg-gray-900 mb-4'>
            <div className='relative' style={{ paddingBottom: '40%' }}>
                <a href={company_url} target='_blank' rel="noopener noreferrer">
                    <img src={company_logo} alt={company} className='h-full w-full absolute top-0 object-fill' />
                </a>
            </div>
            <div className='p-8'>
                <div className='uppercase flex items-baseline justify-around'>
                    <span>
                        {title}
                    </span>
                    <span className='bg-red-500 px-2 py-1 font-bold rounded-full text-xs'>
                        {type}
                    </span>
                </div>
                <div className='mt-4'>
                    <a href={url} target='_blank' rel='noopener noreferrer' className="btn bg-blue-500">Apply</a>
                </div>
                <div className='mt-4'>
                    <button className="btn bg-red-500" onClick={onClick}>
                        Explore
                    </button>
                </div>
                <div>
                    <p>
                        {/* <ReactMarkdown source={description} /> */}
                    </p>
                </div>
            </div>
        </div>
    )
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired,
}

export default JobItem