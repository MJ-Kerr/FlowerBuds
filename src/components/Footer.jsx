import React from 'react';
import { Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import LogoBtn from './img/LogoBtn.png'

const Footer = () => {
    const LINKS = [
        {
            title: "Product",
            items: [
                { label: "Home", link: "/" },
                { label: "Bawlers", link: "/bawlers" },
                { label: "Candles", link: "/candles" },
                { label: "Podcast", link: "/podcast" },
            ],
        },
        {
            title: "FlowerBuds",
            items: [
                { label: "About us", link: "/about" },
                { label: "Press", link: "/press" },
                { label: "News", link: "/news" },
                { label: "Contact", link: "/contact" },
            ],
        },
        {
            title: "Resource",
            items: [
                { label: "Blog", link: "/blog" },
                { label: "Newsletter", link: "/newsletter" },
                { label: "Events", link: "/events" },
                { label: "Help center", link: "/help" },
            ],
        },
    ];

    return (
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-cols-1 justify-around md:grid-cols-2 pt-4"> {/* Add pt-4 class for top padding */}
                    <Typography className="mb-6">
                        <Link to="/backend" className='cursor-default'>
                            <img src={LogoBtn} alt="Logo" />
                        </Link>
                    </Typography>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography variant="small" className="mb-3 font-medium opacity-40 text-white">
                                    {title}
                                </Typography>
                                {items.map(({ label, link }) => (
                                    <li key={label}>
                                        <Typography as={Link} to={link} className="py-3 font-normal text-white transition-colors hover:text-deep-purple-800">
                                            {label}
                                        </Typography>
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
