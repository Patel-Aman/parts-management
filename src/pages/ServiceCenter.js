import React, { useState } from "react";
import AddCustomer from "../components/Forms/AddCustomer";
import PageTitle from "../components/Typography/PageTitle";
import partsData from "../assets/json/parts.json";
import PartCard from "../components/Cards/PartCard";
import UsePart from "../components/Forms/UsePart";
import ReqParts from "../components/Forms/ReqParts";
import apiConfig from "../utils/apiConfig";

const ServiceCenter = () => {
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (formData) => {
        try {
            const response = await apiConfig.post("/sc/customer", formData);
            if (response.status === 200) {
                console.log("process excuted successfully");
            }
        } catch (error) {
            console.error("Error adding customer in:", error);
            setErrorMessage(
                "An error occurred while logging in. Please try again later."
            );
        }
    };

    return (
        <div>
            <PageTitle>Add Customer Form</PageTitle>
            <AddCustomer onSubmit={handleSubmit} />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}

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
