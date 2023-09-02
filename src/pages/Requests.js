import React from "react";
import RequestCard from "../components/Cards/RequestCard";
import RequestsData from "../assets/json/requests.json";

const Requests = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {RequestsData.map((request) => (
                <RequestCard key={request.id} request={request} />
            ))}
        </div>
    );
};

export default Requests;
