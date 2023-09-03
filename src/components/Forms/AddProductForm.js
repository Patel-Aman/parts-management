import React, { useState } from "react";
import { Input, Button, Label } from "@windmill/react-ui";

function AddProductForm({ onAddProduct }) {
    const [product, setProduct] = useState({
        name: "",
        skuid: "",
        quantity: "",
        manufacturer: "",
        model: "",
        deviceType: "",
        description: "",
        releaseDate: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        let parsedValue = value;

        // Check if the input name is "releaseDate" and parse the value as a Date
        if (name === "releaseDate") {
            parsedValue = new Date(value).toISOString();
        }

        setProduct({
            ...product,
            [name]: parsedValue,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation here if needed
        onAddProduct(product);
        // Reset the form
        setProduct({
            name: "",
            skuid: "",
            quantity: "",
            manufacturer: "",
            model: "",
            deviceType: "",
            description: "",
            releaseDate: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label>
                <span>Product Name</span>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>SKU ID</span>
                <Input
                    name="skuid"
                    type="text"
                    value={product.skuid}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>Quantity</span>
                <Input
                    name="quantity"
                    type="number"
                    value={product.quantity}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>Manufacturer</span>
                <Input
                    name="manufacturer"
                    type="text"
                    value={product.manufacturer}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Model</span>
                <Input
                    name="model"
                    type="text"
                    value={product.model}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Device Type</span>
                <Input
                    name="deviceType"
                    type="text"
                    value={product.deviceType}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Description</span>
                <Input
                    name="description"
                    type="text"
                    value={product.description}
                    onChange={handleChange}
                />
            </Label>

            <Label className="block">
                <span className="text-gray-700">Release Date</span>
                <div className="relative rounded-md shadow-sm">
                    <input
                        name="releaseDate"
                        type="date"
                        value={product.releaseDate}
                        onChange={handleChange}
                        className="block w-full px-4 py-2 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-400 focus:border-blue-400"
                    />
                </div>
            </Label>

            <Button type="submit" block>
                Add Product
            </Button>
        </form>
    );
}

export default AddProductForm;
