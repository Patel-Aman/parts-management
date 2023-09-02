import React from "react";
import { Card } from "@windmill/react-ui";
import ProductDefault from "../../assets/img/product-model-default.png";

const ProductModelCard = ({ product }) => {
    return (
        <Card className="p-4">
            <div className="mb-4 flex">
                <div className="w-20 h-20">
                    <img
                        src={product.image || ProductDefault}
                        alt={product.name}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>
                <div className="ml-4">
                    <h2 className="text-xl font-semibold">{product.brand}</h2>
                    <p className="text-gray-600">{product.model}</p>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>
            <div>
                <h4 className="text-lg font-semibold">Parts</h4>
                <ul className="list-disc ml-6">
                    {product.parts.map((part, index) => (
                        <li key={index}>
                            {part.name} (SKU: {part.sku})
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
};

export default ProductModelCard;
