import React from 'react'
import { useForm } from 'react-hook-form'

const SearchJobs = () => {

    const { handleSubmit, errors, register } = useForm({
        defaultValues: {
            fulltime: false
        }
    });

    return (
        <div className='container mt-8'>

            <p className='text-xl font-semibold uppercase text-center'>Search Jobs</p>

            <div className='flex justify-center'>
                <form onSubmit={handleSubmit(formData => {
                    console.log(formData)
                })} className='text-black p-2 w-full'>
                    <div className='py-4'>
                        <input type="text" name='description' placeholder='React, Node etc.' ref={register({
                            required: 'Required!'
                        })} className='shadow border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline text-lg' />
                        <label htmlFor="description" className='block text-gray-400 py-2'>Description</label>
                        {errors.description ? <span className="text-red-500 upper font-bold text-lg">
                            {errors.description.message}
                        </span> : null}
                    </div>
                    <div className='py-4'>
                        <input type="text" name='location' placeholder='City, Zip etc.' ref={register({
                            required: 'Required!'
                        })} className='shadow border rounded w-full p-4 leading-tight focus:outline-none focus:shadow-outline text-lg' />
                        <label htmlFor="location" className='block text-gray-400 py-2'>Location</label>
                        {errors.location ? <span className="text-red-500 upper font-bold text-lg">
                            {errors.location.message}
                        </span> : null}
                    </div>
                    <div className='pb-6 flex'>
                        <input type="checkbox" name='fulltime' ref={register()} className='focus:outline-none rounded h-6 w-6' />
                        <label htmlFor="fulltime" className='text-gray-400 px-2'>Fulltime?</label>
                    </div>
                    <div>
                        <button type="submit" className='btn bg-red-500 text-white'>
                            Search
                    </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchJobs
