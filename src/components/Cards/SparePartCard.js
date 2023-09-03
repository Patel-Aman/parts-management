import React, {useEffect, useState} from "react";
import { Card, Badge } from "@windmill/react-ui";
import DefaultPartImg from "../../assets/img/default-part.png";
import apiConfig from "../../utils/apiConfig";

function SparePartCard({ sparePart }) {
    const releaseDate = new Date(sparePart.releaseDate);
    const formattedDate = `${releaseDate.getDate()}-${
        releaseDate.getMonth() + 1
    }-${releaseDate.getFullYear()}`
    return (
        <div className="border border-gray-200 rounded-lg p-4">
            {/* Part Image */}
            <div className="w-20 h-20">
                <img
                    src={DefaultPartImg}
                    alt={sparePart.name}
                    className="object-cover w-full h-full rounded-lg"
                />
            </div>

            {/* Part Details */}
            <div className="mt-4">
                {/* Part Name */}
                <h2 className="text-xl font-semibold">{sparePart.name}</h2>

                {/* SKU ID */}
                <p className="text-sm text-gray-500">SKU ID: {sparePart.skuid}</p>

                {/* Description */}
                <p className="text-gray-600">{sparePart.description}</p>

                {/* Model */}
                <p className="text-gray-600">{sparePart.model}</p>

                {/* Release date */}
                <p className="text-gray-600">{formattedDate}</p>
            </div>
        </div>

    );
}

export default SparePartCard;
