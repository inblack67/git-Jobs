import React, { useReducer } from 'react'
import JobsContext from './jobsContext'
import JobsReducer from './jobsReducer'
import axios from 'axios'

const JobsState = (props) => {

    const initalState = {
        loading: true,
        jobs: []
    }

    const [state, dispatch] = useReducer(JobsReducer, initalState);

    const getJobs = async () => {
        try {
            const res = await axios(`${process.env.REACT_APP_CORS_HACK}/${process.env.REACT_APP_API_ENDPOINT}`);
            console.log(res.data);
        } catch (err) {
            
        }
    }

    return (
        <JobsContext.Provider value={{
            loading: state.loading,
            jobs: state.jobs,
            getJobs
        }}>
            { props.children }
        </JobsContext.Provider>
    )
}

export default JobsState
