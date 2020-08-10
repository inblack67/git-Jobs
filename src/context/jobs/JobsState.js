import React, { useReducer } from 'react'
import JobsContext from './jobsContext'
import JobsReducer from './jobsReducer'
import axios from 'axios'
import { GET_JOBS, FETCH_ERROR, SEARCH_JOBS, GET_JOB, GEOCODE_ERROR, GET_GEOCODES } from '../types'

const JobsState = (props) => {

    const initalState = {
        loading: true,
        jobs: [],
        geocodedLocations: [],
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

    const getGeocodes = async (text) => {
        try {
            const res = await axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${text}.json?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}
            `)
            if (res.data.features) {
                dispatch({
                    type: GET_GEOCODES,
                    payload: res.data.features[0].center
                })
            }
        } catch (err) {
            console.error(err)
            dispatch({
                type: GEOCODE_ERROR
            })
        }
    }

    return (
        <JobsContext.Provider value={{
            loading: state.loading,
            jobs: state.jobs,
            job: state.job,
            geocodedLocations: state.geocodedLocations,
            searchJobs,
            getJobs,
            getJobById,
            getGeocodes
        }}>
            { props.children}
        </JobsContext.Provider>
    )
}

export default JobsState
