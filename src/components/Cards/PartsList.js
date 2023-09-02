import React, { useState } from "react";
import { Card } from "@windmill/react-ui";

function PartsList({ product, changeQuantity }) {
    const [quantity, setQuantity] = useState(product.quantity || "0");

    return (
        <Card className="p-4 space-y-2 mt-2 mb-3">
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-500">SKU ID: {product.sku}</p>
            <div className="flex items-center space-x-2">
                <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                        const newValue = e.target.value.replace(/[^0-9]/g, "");
                        setQuantity(newValue);
                        changeQuantity(product.sku, Number(newValue));
                    }}
                    placeholder="Quantity"
                    className="w-1/2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                />
            </div>
        </Card>
    );
}

export default PartsList;
