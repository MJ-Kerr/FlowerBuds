import React from 'react';
import { Typography } from "@material-tailwind/react";
import LogoBtn from './img/LogoBtn.png'

const Footer = () => {
    const LINKS = [
        {
            title: "Product",
            items: ["Home", "Bawlers", "Candles", "Podcast"],
        },
        {
            title: "FlowerBuds",
            items: ["About us", "Press", "News", "Contact"],
        },
        {
            title: "Resource",
            items: ["Blog", "Newsletter", "Events", "Help center"],
        },
    ];

    return (
        <footer className="relative w-full">
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid grid-cols-1 justify-around md:grid-cols-2">
                    <Typography className="mb-6">
                        <img src={LogoBtn} alt="Logo" />
                    </Typography>
                    <div className="grid grid-cols-3 justify-between gap-4">
                        {LINKS.map(({ title, items }) => (
                            <ul key={title}>
                                <Typography variant="small" className="mb-3 font-medium opacity-40 text-white" >
                                    {title}
                                </Typography>
                                {items.map((link) => (
                                    <li key={link}>
                                        <Typography as="a" href="#" className="py-3 font-normal text-white transition-colors hover:text-deep-purple-800">
                                            {link}
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
