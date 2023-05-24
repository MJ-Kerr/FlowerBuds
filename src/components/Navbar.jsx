import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
    const [openLoginDrawer, setOpenLoginDrawer] = useState(false);
    const [open, setOpen] = useState(false);

    const openLoginDrawerHandler = () => {
        setOpenLoginDrawer(true);
    };

    const closeLoginDrawerHandler = () => {
        setOpenLoginDrawer(false);
    };

    const handleMenu = () => {
        setOpen((prev) => !prev);
    };

    const navlinks = [
        {
            title: 'Candles',
            link: '/candles',
        },
        {
            title: 'Bawlers',
            link: '/bawlers',
        },
    ];

    return (
        <div className='bg-teal-700'>
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
                            <button
                                onClick={openLoginDrawerHandler}
                                className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold transition-all duration-500'
                            >
                                Login
                            </button>
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
                {/* Login Drawer */}
                <Drawer
                    placement="bottom"
                    open={openLoginDrawer}
                    onClose={closeLoginDrawerHandler}
                    className="p-4"
                >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Login
                        </Typography>
                        <IconButton
                            variant="text"
                            color="blue-gray"
                            onClick={closeLoginDrawerHandler}
                        >
                            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                        </IconButton>
                    </div>
                    {/* Login Form */}
                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-lg font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="text-lg font-medium text-gray-700">Password</label>
                            <input type="password" id="password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600" />
                        </div>
                        <button type="submit" className="bg-teal-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-teal-700 transition-colors duration-300">
                            Sign In
                        </button>
                    </form>
                </Drawer>
            </div>
        </div>
    );
};

export default Navbar;
