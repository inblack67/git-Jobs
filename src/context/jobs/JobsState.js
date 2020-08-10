import React, { useReducer } from 'react'
import JobsContext from './jobsContext'
import JobsReducer from './jobsReducer'
import axios from 'axios'
import { GET_JOBS, FETCH_ERROR, SEARCH_JOBS, GET_JOB } from '../types'

const JobsState = (props) => {

    const initalState = {
        loading: true,
        jobs: [],
        job: null
    }

    const [state, dispatch] = useReducer(JobsReducer, initalState);

    const getJobs = async () => {
        try {
            const res = await axios(`${process.env.REACT_APP_CORS_HACK}/${process.env.REACT_APP_API_ENDPOINT}.json?markdown=true`);
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

    const getJobById = async id => {
        try {
            
            const res = await axios(`${process.env.REACT_APP_CORS_HACK}/${process.env.REACT_APP_API_ENDPOINT}/${id}.json?markdown=true`);
            console.log(res.data);
            dispatch({
                type: GET_JOB,
                payload: res.data
            })

        } catch (err) {
            dispatch({
                type: FETCH_ERROR
            })
        }
    }

    const searchJobs = async ({ description, location, fulltime }) => {
        try {
            const pureLocation = location.trim().split(' ').join('+');

            const pureDescription = description.trim();

            const res = await axios(`${process.env.REACT_APP_CORS_HACK}/${process.env.REACT_APP_API_ENDPOINT}.json?location=${pureLocation}&full_time=${fulltime}&description=${pureDescription}&markdown=true`);

            dispatch({
                type: SEARCH_JOBS,
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
            job: state.job,
            searchJobs,
            getJobs,
            getJobById
        }}>
            { props.children }
        </JobsContext.Provider>
    )
}

export default JobsState
