import React, { useReducer } from 'react'
import JobsContext from './jobsContext'
import JobsReducer from './jobsReducer'
import axios from 'axios'
import { GET_JOBS, FETCH_ERROR } from '../types'

const JobsState = (props) => {

    const initalState = {
        loading: true,
        jobs: []
    }

    const [state, dispatch] = useReducer(JobsReducer, initalState);

    const getJobs = async () => {
        try {
            const res = await axios(`${process.env.REACT_APP_CORS_HACK}/${process.env.REACT_APP_API_ENDPOINT}?markdown=true`);
            dispatch({
                type: GET_JOBS,
                payload: res.data
            })
        } catch (err) {
            console.error(err);
            dispatch({
                type: FETCH_ERROR
            })
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
