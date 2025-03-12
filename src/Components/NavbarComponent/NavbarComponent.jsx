import React from 'react';
import { Link, NavLink } from 'react-router';

const NavbarComponent = () => {

    {/* Navigation Links */ }
    const navLinks = <>
        <ul className='lg:flex font-semibold gap-3'>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
        </ul>
    </>
    
    return (
        <nav className="bg-white shadow-md p-3 sticky top-0 z-50">
            <div className="flex justify-between items-center px-3 md:px-12 lg:px-20">
                <Link to="/" className="text-xl lg:text-2xl font-bold text-blue-600">GadgetSwap</Link>

                <div className="space-x-6">
                    {navLinks}
                </div>

                <div className="space-x-4">
                    <Link to="/sign-in">
                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                            Sign In
                        </button>
                    </Link>
                    <Link to="/sign-up">
                        <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
