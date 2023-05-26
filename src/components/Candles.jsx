import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardHeader, CardFooter, CardBody, Typography, Button } from "@material-tailwind/react";
import Background from './img/Background.JPEG';

const Candles = () => {
    const bgStyle = {
        backgroundImage: `url(${Background})`,
        backgroundAttachment: 'fixed',
    };

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                const candles = res.data.Products.filter(product => product.isCandle);
                setProducts(candles);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const chunkArray = (arr, size) => {
        const chunkedArr = [];
        let index = 0;
        while (index < arr.length) {
            chunkedArr.push(arr.slice(index, size + index));
            index += size;
        }
        return chunkedArr;
    };

    const chunkedProducts = chunkArray(products, 3);

    return (
        <div className="bg-cover bg-center h-screen flex flex-col items-center overflow-auto" style={bgStyle}>
            {products.length > 0 ? (
                <div className="mt-auto">
                    <h2 className="text-5xl font-bold mb-4 text-pink-900 backdrop-blur-sm rounded-lg shadow-md backdrop-hue-rotate-180">FlowerBuds Candles</h2>
                    {chunkedProducts.map((row, index) => (
                        <div key={index} className="flex justify-center mb-4">
                            {row.map(product => (
                                <Card key={product._id} className="w-96 mx-2">
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
                                                ${product.Price}
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
                    ))}
                </div>
            ) : (
                <p>Loading products...</p>
            )}
        </div>
    );
};

export default Candles;
