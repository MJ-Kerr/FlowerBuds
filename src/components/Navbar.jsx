import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navlinks = [
        {
            title: 'Candles',
            link: '/candles',
        },
        {
            title: 'Bawlers',
            link: '/bawlers',
        },
        {
            title: 'About',
            link: '/about',
        },
        {
            title: 'Login',
            link: '/login',
        },
    ];

    const [open, setOpen] = useState(false);

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className='bg-orange-900'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* left side of the navbar */}
                    <div className='flex items-center'>
                        <Link
                            to='/'
                            className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold'
                        >
                            FlowerBuds
                        </Link>
                    </div>
                    {/* right side of the navbar */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navlinks.map((link, index) => (
                                <Link
                                    to={link.link}
                                    key={index}
                                    className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold transition-all duration-500'
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                    {/* Hamburger Button */}
                    <div className='-mr-2 flex md:hidden'>
                        <button
                            type='button'
                            onClick={handleMenu}
                            className='inline-flex items-center justify-center p-2 rounded-md text-fuchsia-950 hover:bg-teal-800 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-fuchsia-600 focus:ring-teal-600'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
                {open ? (
                    <div className='md:hidden'>
                        <div className='ox-2 pt-2 pb-3 space-y-1 sm:px-3'>
                            {navlinks.map((link, index) => (
                                <Link
                                    to={link.link}
                                    key={index}
                                    className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold transition-all duration-500 block'
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default Navbar;
