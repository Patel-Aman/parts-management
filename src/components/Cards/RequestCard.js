import React from "react";
import { Card, Badge } from "@windmill/react-ui";

function RequestCard({ request }) {
    return (
        <Card className="p-4">
            <div className="mb-4">
                <p className="text-gray-600">Request ID: {request.id}</p>
                <p className="text-gray-600">From: {request.from}</p>
                <p className="text-gray-600">Date: {request.date}</p>
            </div>

            <div className="mb-4">
                <h2 className="text-xl font-semibold">Status:</h2>
                <Badge>{request.status}</Badge>
            </div>

            <div>
                <h2 className="text-xl font-semibold">Dispatched Parts:</h2>
                <ul className="list-disc ml-6">
                    {request.parts.map((part, index) => (
                        <li key={index}>
                            {part.name} - Quantity: {part.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

export default RequestCard;
