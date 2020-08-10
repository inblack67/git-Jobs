import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown'


const JobItem = ({ history, job: { company, company_logo, company_url, description, how_to_apply, location, title, type, url, id } }) => {

    const currentLocation = useLocation();

    const onClick = e => {
        history.push(`/jobs/${id}`);
    }

    return (
        <div className='rounded-lg overflow-hidden border mb-4 bg-gray-900'>
            <div className='relative' style={{ paddingBottom: '40%' }}>
                <a href={company_url} target='_blank' rel="noopener noreferrer">
                    <img src={company_logo} alt={company} className='h-full w-full absolute top-0 object-fill' />
                </a>
            </div>
            <div className='p-8'>
                <div className='uppercase flex items-baseline justify-around'>
                    <span className='truncate'>
                        {title}
                    </span>
                    <span className='bg-red-500 px-4 py-2 font-bold rounded-full text-xs'>
                        {type}
                    </span>
                </div>
                <div className='mt-8 flex items-baseline justify-around'>
                    <a href={url} target='_blank' rel='noopener noreferrer' className="btn bg-blue-500">Apply</a>
                    <button className="btn bg-green-500" onClick={onClick}>
                        Explore
                    </button>
                </div>
                {currentLocation.pathname === `/jobs/${id}` ? <div className="font-hairline">
                    <div className='font-semibold'>
                        <h1 className="text-red-500">How to apply?</h1>
                        <ReactMarkdown source={how_to_apply} />
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold">Description</h1>
                        <ReactMarkdown source={description} />
                    </div>
                </div> : null}
            </div>
        </div>
    )
}

JobItem.propTypes = {
    job: PropTypes.object.isRequired,
}

export default withRouter(JobItem);
