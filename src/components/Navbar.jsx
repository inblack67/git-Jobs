import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-red-500 p-4 font-semibold text-xl'>
            <div className="container flex justify-between items-baseline">
                <Link to='/'>git | Jobs</Link>
                <ul className='flex items-baseline justify-between w-48 font-semibold text-sm'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/search-jobs'>Search</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
