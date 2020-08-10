import { FETCH_ERROR, GET_JOBS, SEARCH_JOBS, GET_JOB, GEOCODE_ERROR, GET_GEOCODES } from '../types';

export default (state, action) => {
    const { payload, type } = action;
    switch(type){

        case GET_JOBS:
        case SEARCH_JOBS: 
        return {
            ...state,
            jobs: [...state.jobs, ...payload],
            loading: false
        }

        case GET_JOB: 
        return {
            ...state,
            job: payload,
            loading: false
        }

        case FETCH_ERROR: 
        return {
            ...state,
            jobs: [],
            job: null,
            loading: false
        }

        case GET_GEOCODES:
            return {
                ...state,
                geocodedLocations: [...state.geocodedLocations, {...payload}],
                loading: false
            }

        case GEOCODE_ERROR:
            return {
                ...state,
                geocodedLocations: [],
                loading: false
            }

        default: return state;
    }
}