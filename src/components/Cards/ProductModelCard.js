import React, {useState} from "react";
import { Card } from "@windmill/react-ui";
import ProductDefault from "../../assets/img/product-model-default.png";

const ProductModelCard = ({ product }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const releaseDate = new Date(product.releaseDate);
    const formattedDate = `${releaseDate.getDate()}-${
        releaseDate.getMonth() + 1
    }-${releaseDate.getFullYear()}`
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
                    <h2 className="text-xl font-semibold">{product.deviceType}</h2>
                    <p className="text-gray-600">{product.model}</p>
                    <p className="text-gray-600">{product.skuid}</p>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="text-lg font-semibold">{product.name}</h3>
            </div>

            <div className="mb-3">
                <h3 className="text-sm font-gray-300">{product.description}</h3>
            </div>
             Additional Details
            <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Manufacturer */}
                    <div>
                        <p className="text-sm text-gray-500">Manufacturer</p>
                        <p>{product.manufacturer}</p>
                    </div>

                    {/* Model */}
                    <div>
                        <p className="text-sm text-gray-500">Model</p>
                        <p>{product.model}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Device Type</p>
                        <p>{product.deviceType}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Release Date</p>
                        <p>{formattedDate}</p>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h4 className="text-lg font-semibold">Parts</h4>
                    <div className="cursor-pointer" onClick={toggleDropdown}>
                        <div className="p-2 border border-gray-200 rounded">
                            Click to {isDropdownOpen ? "hide" : "show"} parts
                        </div>
                    </div>
                    {isDropdownOpen && (
                        <ul className="ml-6">
                            {product.spareParts.map((part, index) => (
                                <li
                                    key={index}
                                    className="cursor-pointer transition-transform transform hover:bg-gray-100 mt-2"
                                >
                                    <div className="p-2 border border-gray-200 rounded">
                                        {part.name} (SKU: {part.skuid})
                                    </div>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

            </div>
        </Card>
    );
};

export default ProductModelCard;
