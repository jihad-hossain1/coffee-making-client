import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='mx-20 py-4'>
            <ul className='flex space-x-10 text-gray-600'>
                <li className='hover:font-semibold  hover:border-b-pink-700'>
                    <Link to='/'>Home</Link>
                </li>
                <li className='hover:font-semibold hover:border-2 hover:border-b-pink-700 rounded-md border-transparent '>
                    <Link to='/addCoffee'>AddedCoffee</Link>
                </li>
                <li className='hover:font-semibold hover:border-2 hover:border-b-pink-700 rounded-md border-transparent '>
                    <Link to='/updateCoffee'>UpdateCoffee</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;