import React, { useState } from 'react';
import { Card, CardHeader, CardBody, Button } from "@material-tailwind/react";
import axios from 'axios';

const AddProduct = () => {
    const [name, setName] = useState('');
    const [imgUrl, setImgUrl] = useState('');
    const [Description, setDescription] = useState('');
    const [isCandle, setIsCandle] = useState(false);
    const [isApparel, setIsApparel] = useState(false);
    const [Price, setPrice] = useState(0);
    const [Quantity, setQuantity] = useState(0);
    const [errors, setErrors] = useState([]);
    const [Product, setProduct] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // create product
        const newProduct = {
            name: name,
            imgUrl: imgUrl,
            Description: Description,
            Price: Price,
            Quantity: Quantity,
            isApparel: isApparel,
            isCandle: isCandle,
        };

        axios
            .post('http://localhost:8000/api/products', newProduct)
            .then((res) => {
                console.log(res.data);
                // Clear the form fields
                setName('');
                setImgUrl('');
                setDescription('');
                setPrice(0);
                setQuantity(0);
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = Object.values(errorResponse).map((error) => error.message);
                setErrors(errorArr);
                console.log(err);
            });
    };
    const deleteProduct = (ProductId) => {
        axios.delete(`http://localhost:8000/api/Products/${ProductId}`)
            .then(res => {
                console.log(res.data);
                setProduct(Product.filter(Product => Product._id !== ProductId));
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Card className="max-w-sm mx-auto">
            <CardHeader className="text-xl font-bold mb-4">Add Product</CardHeader>
            <CardBody>
                <form onSubmit={handleSubmit}>
                    {errors.length > 0 && (
                        <div className="mb-4">
                            {errors.map((err, index) => (
                                <p key={index} className="text-red-500">{err}</p>
                            ))}
                        </div>
                    )}

                    <label className="block mb-4">
                        <span className="text-gray-700">Product Name:</span>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-input mt-1 block w-full" />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Image Url:</span>
                        <input type="text" value={imgUrl} onChange={(e) => setImgUrl(e.target.value)} className="form-input mt-1 block w-full" />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Description:</span>
                        <textarea type="text" value={Description} onChange={(e) => setDescription(e.target.value)} className="form-textarea mt-1 block w-full" />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Price:</span>
                        <input type="number" value={Price} onChange={(e) => setPrice(Number(e.target.value))} className="form-input mt-1 block w-full" />
                    </label>

                    <label className="block mb-4">
                        <span className="text-gray-700">Quantity:</span>
                        <input type="number" value={Quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="form-input mt-1 block
w-full" />
                    </label>

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={isCandle}
                            onChange={(e) => setIsCandle(e.target.checked)}
                            className="form-checkbox"
                        />
                        <span className="ml-2 text-gray-700">Candle</span>
                    </div>

                    <div className="flex items-center mb-4">
                        <input
                            type="checkbox"
                            checked={isApparel}
                            onChange={(e) => setIsApparel(e.target.checked)}
                            className="form-checkbox"
                        />
                        <span className="ml-2 text-gray-700">Apparel</span>
                    </div>

                    <Button type="submit" color="blue" ripple="light" className="w-full">
                        Add Product
                    </Button>
                    <button onClick={() => deleteProduct(Product._id)} style={{ backgroundColor: "red" }}>Delete Product</button>
                </form>
            </CardBody>
        </Card>
    );
};

export default AddProduct;
