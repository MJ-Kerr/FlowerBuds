import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardFooter, CardBody, Typography, Button } from "@material-tailwind/react";
import Background from './img/Background.JPEG';

const Candles = (props) => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.Products);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div className="bg-cover bg-center h-screen flex items-center justify-center" style={bgStyle}>
            {products.length > 0 ? (
                <div className="flex flex-wrap justify-center">
                    {products.map(product => (
                        <Card key={product._id} className="w-96">
                            <CardHeader shadow={false} floated={false} className="h-96">
                                <img
                                    src={product.imgUrl}
                                    className="w-full h-full object-cover"
                                    alt={product.name}
                                />
                            </CardHeader>
                            <CardBody>
                                <div className="flex items-center justify-between mb-2">
                                    <Typography color="blue-gray" className="font-medium">
                                        {product.name}
                                    </Typography>
                                    <Typography color="blue-gray" className="font-medium">
                                        $35.00
                                    </Typography>
                                </div>
                                <Typography variant="small" color="gray" className="font-normal opacity-75">
                                    {product.Description}
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
                    ))}
                </div>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default Candles;
