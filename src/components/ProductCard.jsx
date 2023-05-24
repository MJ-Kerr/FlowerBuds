import React from 'react';
import { Card, Typography, Button } from "@material-tailwind/react";
import { Link } from 'react-router-dom';
import Candle from './img/candle.png'
import Podcast from './img/Podcast.png'
import Bawlers from './img/Bawlers.png'

const ProductCard = () => {
    return (
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-7xl">
            <Card shadow={true} className="relative grid h-[20rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center">
                {/* Card content */}
                <figure className="relative h-full w-full">
                    <img
                        className="h-full w-full rounded-xl"
                        src={Candle} alt="filler"
                    />
                    <figcaption className="absolute bottom-8 left-2/4 flex w-[calc(100%-4rem)] -translate-x-2/4 justify-center rounded-xl border border-white bg-white/75 py-4 px-6 shadow-lg shadow-black/5 saturate-200 backdrop-blur-sm">
                        <Link to='/candles'>
                            <Typography variant="h5" color="blue-gray">
                                Candles
                            </Typography>
                        </Link>
                    </figcaption>
                </figure>
            </Card>
            <Card shadow={true} className="relative grid h-[25rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center  bg-teal-700">
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

            <Card shadow={true} className="relative grid h-[20rem] w-full max-w-[20rem] items-end justify-center  text-center  bg-teal-700">
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
    );
};

export default ProductCard;

// import React from 'react'
// import {
//     Card, CardHeader, CardBody, Typography, Button
// } from "@material-tailwind/react";

// const ProductCard = () => {
//     return (
//         <div>
//             {/* <Card className="mt-6 w-96">
//                 <CardHeader color="blue-gray" className="relative h-56">
//                     <img src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="img-blur-shadow" layout="fill" />
//                 </CardHeader>
//                 <CardBody>
//                     <Typography variant="h5" color="blue-gray" className="mb-2">
//                         UI/UX Review Check
//                     </Typography>
//                     <Typography>
//                         The place is close to Barceloneta Beach and bus stop just 2 min by walk
//                         and near to &quot;Naviglio&quot; where you can enjoy the main night life
//                         in Barcelona.
//                     </Typography>
//                 </CardBody>
//                 <CardFooter className="pt-0">
//                     <Button>Read More</Button>
//                 </CardFooter>
//             </Card> */}
//             <Card
//                 shadow={false}
//                 className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
//             >
//                 <CardHeader
//                     floated={false}
//                     shadow={false}
//                     color="transparent"
//                     className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
//                 >
//                     <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
//                 </CardHeader>
//                 <CardBody className="relative py-14 px-6 md:px-12">
//                     <Typography
//                         variant="h2"
//                         color="white"
//                         className="mb-6 font-medium leading-[1.5]"
//                     >
//                         How we design and code open-source projects?
//                     </Typography>
//                     <Typography variant="h5" className="mb-4 text-gray-400">
//                         Candice Wu
//                     </Typography>
//                 </CardBody>
//             </Card>
//         </div>
//     );
// }

// export default ProductCard
