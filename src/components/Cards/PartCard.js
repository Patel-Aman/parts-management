import React, {useEffect, useState} from "react";
import { Card, Badge } from "@windmill/react-ui";
import DefaultPartImg from "../../assets/img/default-part.png";
import apiConfig from "../../utils/apiConfig";

function PartCard({ part }) {
    return (
        <Card>
            <div className="flex justify-between items-center p-4">
                {/* Part Image */}
                <div className="w-20 h-20">
                    <img
                        src={part.image || DefaultPartImg}
                        alt={part.spareParts.name}
                        className="object-cover w-full h-full rounded-lg"
                    />
                </div>

                {/* Part Details */}
                <div className="flex-1 ml-4">
                    {/* SKU ID */}
                    <p className="text-sm text-gray-500">SKU ID: {part.spareParts.skuid}</p>

                    {/* Part Name */}
                    <h2 className="text-xl font-semibold">{part.spareParts.name}</h2>

                    {/* Description */}
                    <p className="text-gray-600">{part.spareParts.description}</p>

                    {/* Part Type */}
                    <p className="mt-2">
                        <Badge>{part.CurrentStatus}</Badge>
                    </p>
                </div>
            </div>

                {/* Additional Details */}
            <div className="border-t border-gray-200 p-4">
                <div className="grid grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div>
                        <p className="text-sm text-gray-500">Quantity</p>
                        <p>{part.quantity}</p>
                    </div>

                    {/* Manufacturer */}
                    <div>
                        <p className="text-sm text-gray-500">Manufacturer</p>
                        <p>{part.spareParts.Manufacturer}</p>
                    </div>

                    {/* Model */}
                    <div>
                        <p className="text-sm text-gray-500">Model</p>
                        <p>{part.spareParts.Model}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Part Type</p>
                        <p>{part.spareParts.PartType}</p>
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Release Date</p>
                        <p>{part.spareParts.releaseDate}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
}

export default PartCard;
