import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
// import Candles from './Candles';

const Navbar = () => {
    // for login drawer
    const [openLoginDrawer, setOpenLoginDrawer] = useState(false);
    // for hamburger menu
    const [open, setOpen] = useState(false);
    // for cart
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    // Clear the cart items by setting an empty array
    const removeAllItems = () => {
        setCartItems([]);
    };
    // Remove one item from the cart
    const removeFromCart = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems.splice(index, 1);
        setCartItems(updatedCartItems);
    };


    const openCartHandler = () => {
        setOpenCart(true);
    };

    const closeCartHandler = () => {
        setOpenCart(false);
    };

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
        {
            title: 'Podcasts',
            link: '/podcast',
        }
    ];

    return (
        <div className='bg-teal-700'>
            <div className='mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16'>
                    {/* left side of the navbar */}
                    <div className='flex items-center'>
                        <Link to='/' className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold text-white'>
                            FlowerBuds
                        </Link>
                    </div>
                    {/* right side of the navbar */}
                    <div className='hidden md:block'>
                        <div className='ml-10 flex items-baseline space-x-4'>
                            {navlinks.map((link, index) => (
                                <Link to={link.link} key={index} className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold transition-all duration-500  text-white' >
                                    {link.title}
                                </Link>
                            ))}
                            <button onClick={openCartHandler} className='text-fuchsia-950 hover:bg-teal-800 px-3 py-2 rounded-md text-xl font-bold transition-all duration-500'>
                                Cart
                            </button>
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
                        <button type='button' onClick={handleMenu} className='inline-flex items-center justify-center p-2 rounded-md text-fuchsia-950 hover:bg-teal-800 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-offset-fuchsia-600 focus:ring-teal-600' >
                            <span className='sr-only'>Open Main Menu</span>
                            {open === true ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {/* Login Drawer */}
                <Drawer placement="bottom" open={openLoginDrawer} onClose={closeLoginDrawerHandler} className="p-4" >
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Login
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeLoginDrawerHandler} >
                            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                        </IconButton>
                    </div>
                    {/* Login Form */}
                    <form className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="email" className="text-lg font-medium text-gray-700">
                                Email
                            </label>
                            <input type="email" id="email" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label htmlFor="password" className="text-lg font-medium text-gray-700">
                                Password
                            </label>
                            <input type="password" id="password" className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-teal-600" />
                        </div>
                        <button type="submit" className="bg-teal-600 text-white rounded-lg py-2 px-4 font-medium hover:bg-teal-700 transition-colors duration-300" >
                            Sign In
                        </button>
                    </form>
                </Drawer>
                {/* Cart Drawer */}
                <Drawer placement="right" open={openCart} onClose={closeCartHandler} className="p-4">
                    <div className="mb-6 flex items-center justify-between">
                        <Typography variant="h5" color="blue-gray">
                            Cart
                        </Typography>
                        <IconButton variant="text" color="blue-gray" onClick={closeCartHandler}>
                            <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                        </IconButton>
                    </div>
                    <div className="flex flex-col space-y-4 max-h-96 overflow-y-auto">
                        <button
                            onClick={removeAllItems}
                            className="text-red-500 mt-4">Remove Items</button>
                        {cartItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <span className="text-lg font-medium">{item.name}</span>
                                <span className="text-gray-500">${item.price}</span>
                                <button onClick={() => removeFromCart(index)} className="text-red-500">Remove</button>
                            </div>
                        ))}
                    </div>
                    {/* <Candles addToCart={addToCart} /> */}
                </Drawer>



            </div>
        </div >
    );
};

export default Navbar;
