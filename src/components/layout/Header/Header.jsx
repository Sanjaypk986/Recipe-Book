import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='w-full p-5 bg-gray-800 flex gap-3 flex-col justify-between items-center sm:flex-row '>
      <span className='text-2xl font-bold text-white'>Delicious Diaries</span>
      <nav>
        <ul className='flex items-center gap-6 text-white'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/indian">Indian</Link>
            </li>
            <li>
                <Link to="/italian">Italian</Link>
            </li>

        </ul>
      </nav>
    </header>
  )
}

export default Header
