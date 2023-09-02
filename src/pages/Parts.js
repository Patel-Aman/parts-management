import React from "react";
import partsData from "../assets/json/parts.json";
import PartCard from "../components/Cards/PartCard";
import AddPartForm from "../components/Forms/AddPart";

const Parts = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {partsData.map((part, index) => (
                <PartCard key={index} part={part} />
            ))}
            <AddPartForm />
        </div>
    );
};

export default Parts;
