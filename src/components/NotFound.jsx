import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='container mx-auto'>
            <div className="text-4xl mt-4 font-semibold text-red-500">404 Not Found</div>
            <div className='text-xl py-2'>
                <Link to='/' className='btn bg-indigo-500'>Back Home</Link>
            </div>
        </div>
    )
}

export default NotFound
