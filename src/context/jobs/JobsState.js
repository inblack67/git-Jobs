import React, { useReducer } from 'react'
import JobsContext from './jobsContext'
import JobsReducer from './jobsReducer'

const JobsState = (props) => {

    const initalState = {
        loading: true
    }

    const [state, dispatch] = useReducer(JobsReducer, initalState);

    return (
        <JobsContext.Provider value={{
            loading: state.loading
        }}>
            { props.children }
        </JobsContext.Provider>
    )
}

export default JobsState
