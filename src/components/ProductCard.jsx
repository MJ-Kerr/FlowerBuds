import React from 'react';
import { Card, Typography } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Candle from './img/candle.png';
import Podcast from './img/Podcast.png';
import Bawlers from './img/Bawlers.png';

const ProductCard = () => {
    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center overflow-auto" >
            <div className="grid grid-cols-3 gap-4">
                {/* Card 1 */}
                <Card shadow={true} className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
                    {/* Card content */}
                    <figure className="relative h-full w-full">
                        <img className="h-full w-full rounded-xl" src={Candle} alt="filler" />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <Link to='/candles'>
                                <Typography variant="h5" color="blue-gray">
                                    Candles
                                </Typography>
                            </Link>
                        </figcaption>
                    </figure>
                </Card>

                {/* Card 2 */}
                <Card shadow={true} className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
                    {/* Card content */}
                    <figure className="relative h-full w-full">
                        <img className="h-full w-full rounded-xl" src={Podcast} alt="filler" />
                        <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <Link to='/podcast'>
                                <Typography variant="h5" color="blue-gray">
                                    Podcast
                                </Typography>
                            </Link>
                        </figcaption>
                    </figure>
                </Card>

                {/* Card 3 */}
                <Card shadow={true} className="relative grid h-[20rem] w-full max-w-[20rem] items-end justify-center  text-center">
                    {/* Card content */}
                    <figure className="relative h-full w-full">
                        <img className="h-full w-full rounded-xl" src={Bawlers} alt="filler" />
                        <figcaption className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex w-[calc(100%-4rem)] justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                            <Link to='/bawlers'>
                                <Typography variant="h5" color="blue-gray">
                                    Bawler
                                </Typography>
                            </Link>
                        </figcaption>
                    </figure>
                </Card>
            </div>
        </div>
    );
};

export default ProductCard;
