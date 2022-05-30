
import React from 'react'
import { Link } from 'react-router-dom';


const NavBar = ({darkMode, setDarkMode}) => {
  return (
    <div className='flex flex-wrap justify-between items-center py-2'>
      <h1 className='flex gap-1 text-4xl font-bold text-red-400 dark:text-orange-300'>Covid <span className='text-blue-500 text-4xl dark:text-gray-200'>
        <Link to='/'>
          Tracker
        </Link>
      </span> </h1>
      <button onClick={() => setDarkMode(!darkMode)} className='bg-white text-black px-3 rounded cursor-pointer ml-5 font-medium dark:bg-black dark:text-white' >
          {darkMode ? 'Light' : 'Dark'}
      </button>
      <div className='flex flex-wrap py-4 gap-10 font-medium text-blue-400 dark:text-gray-200'>
        <p>
              Filter by country

        </p>
        <p>
              Filter by continent

        </p>
      </div>
    </div>
  )
}

export default NavBar;