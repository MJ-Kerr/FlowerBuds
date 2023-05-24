import React from 'react'
// import Construction from './img/Construction.png'
import Background from './img/Background.JPEG';
import Bawler from './img/Bawlers.png';
import { Card, CardHeader, CardFooter, CardBody, Typography, Button } from "@material-tailwind/react";

const Bawlers = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
    };

    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center"
            style={bgStyle}>
            <Card className="w-96">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={Bawler}
                        className="w-full h-full object-cover"
                        alt='Bawler'
                    />
                </CardHeader>
                <CardBody>
                    <div className="flex items-center justify-between mb-2">
                        <Typography color="blue-gray" className="font-medium">
                            Bawler line of T-Shirts
                        </Typography>
                        <Typography color="blue-gray" className="font-medium">
                            $45.00
                        </Typography>
                    </div>
                    <Typography variant="small" color="gray" className="font-normal opacity-75">
                        A shirt for every sad girl/witchy woo woo moment you have
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Button
                        ripple={false}
                        fullWidth={true}
                        className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
                    >
                        Add to Cart
                    </Button>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Bawlers