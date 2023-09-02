import React from "react";
import AddCustomer from "../components/Forms/AddCustomer";
import PageTitle from "../components/Typography/PageTitle";
import partsData from "../assets/json/parts.json";
import PartCard from "../components/Cards/PartCard";
import UsePart from "../components/Forms/UsePart";
import ReqParts from "../components/Forms/ReqParts";

const ServiceCenter = () => {
    const handleSubmit = (formData) => {
        // Handle the form data here (e.g., submit it to an API)
        console.log(formData);
    };

    return (
        <div>
            <PageTitle>Add Customer Form</PageTitle>
            <AddCustomer onSubmit={handleSubmit} />

            <PageTitle>Available Parts</PageTitle>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {partsData.map((part, index) => (
                    <PartCard key={index} part={part} />
                ))}
            </div>

            <PageTitle>Use Parts</PageTitle>
            <UsePart />

            <PageTitle>Request Parts</PageTitle>
            <ReqParts />
        </div>
    );
};

export default ServiceCenter;
