import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-red-500 p-4 font-semibold text-xl'>
            <div className="container">
                <Link to='/'>git | Jobs</Link>
            </div>
        </nav>
    )
}

export default Navbar
