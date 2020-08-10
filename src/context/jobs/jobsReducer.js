import { FETCH_ERROR, GET_JOBS } from '../types';

export default (state, action) => {
    const { payload, type } = action;
    switch(type){

        case GET_JOBS: 
        return {
            ...state,
            jobs: [...state.jobs, ...payload],
            loading: false
        }

        case FETCH_ERROR: 
        return {
            ...state,
            jobs: [],
            loading: false
        }

        default: return state;
    }
}