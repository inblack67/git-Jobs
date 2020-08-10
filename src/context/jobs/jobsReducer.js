import { FETCH_ERROR, GET_JOBS, SEARCH_JOBS, GET_JOB } from '../types';

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

        default: return state;
    }
}