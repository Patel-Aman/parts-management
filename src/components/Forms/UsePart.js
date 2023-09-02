import React, { useState } from "react";
import PartsList from "../Cards/PartsList";

const UsePart = () => {
    const products = [
        { sku: "SKU001", name: "Product A", quantity: 5 },
        { sku: "SKU002", name: "Product B" },
        { sku: "SKU003", name: "Product C" },
    ];
    const [parts, setParts] = useState(
        Object.fromEntries(
            products.map((product) => [product.sku, product.quantity || 0])
        )
    );

    const changeQuantity = (sku, quantity) => {
        setParts({
            ...parts,
            [sku]: quantity,
        });
    };

    const updateParts = () => {
        console.log(parts);

        // make request to backend

        setParts(
            Object.fromEntries(products.map((product) => [product.sku, 0]))
        );
    };

    return (
        <div>
            <h1>Product List</h1>
            {products.map((product) => (
                <PartsList
                    key={product.sku}
                    product={product}
                    changeQuantity={changeQuantity}
                />
            ))}
            <button
                onClick={updateParts}
                className="mt-4 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Use These Parts?
            </button>
        </div>
    );
};

export default UsePart;
