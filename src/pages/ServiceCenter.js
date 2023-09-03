import React, {useEffect, useState} from "react";
import AddCustomer from "../components/Forms/AddCustomer";
import PageTitle from "../components/Typography/PageTitle";
// import partsData from "../assets/json/parts.json";
import PartCard from "../components/Cards/PartCard";
// import UsePart from "../components/Forms/UsePart";
// import ReqParts from "../components/Forms/ReqParts";
import apiConfig from "../utils/apiConfig";
import PartsList from "../components/Cards/PartsList";

const ServiceCenter = () => {
    const [partsData, setPartsData] = useState([]);

    useEffect(() => {
        // Define an async function to fetch the data
        async function fetchPartsData() {
            try {
                const response = await apiConfig.get("/sc/AvailableParts");
                // Assuming the response contains an array of parts
                const parts = response.data;
                setPartsData(parts);
                console.log(parts);
            } catch (error) {
                console.error("Error fetching parts:", error);
            }
        }

        // Call the async function to fetch data
        fetchPartsData();
    }, []);

    // use Parts section
    const [useParts, setUseParts] = useState(
        Object.fromEntries(
            partsData.map((parts) => [parts.spareParts.skuid, 0])
        )
    );

    const changeQuantity = (skuid, quantity) => {
        setUseParts({
            ...useParts,
            [skuid]: quantity,
        });
    };

    const updateParts = () => {
        console.log(useParts);

        // make request to backend

        setUseParts(
            Object.fromEntries(partsData.map((part) => [part.spareParts.skuid, 0]))
        );
    };

    // req parts
    const [reqParts, setReqParts] = useState(
        Object.fromEntries(
            partsData.map((parts) => [parts.spareParts.skuid, 0])
        )
    );

    const changeReqQuantity = (skuid, quantity) => {
        setReqParts({
            ...reqParts,
            [skuid]: quantity,
        });
    };

    const updateReqParts = () => {
        console.log(reqParts);

        // make request to backend

        setReqParts(
            Object.fromEntries(partsData.map((part) => [part.spareParts.skuid, 0]))
        );
    };



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
            <div>
                <h1>Product List</h1>
                {partsData.map((part) => (
                    <PartsList
                        key={part.spareParts.skuid}
                        product={part.spareParts.name}
                        changeQuantity={changeQuantity}
                    />
                ))}
                <button
                    onClick={updateParts}
                    className="mt-4 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Use These Parts?
                </button>
            </div>

            <PageTitle>Request Parts</PageTitle>
            <div>
                <h1>Product List</h1>
                {partsData.map((part) => (
                    <PartsList
                        key={part.spareParts.skuid}
                        product={part.spareParts.name}
                        changeQuantity={changeReqQuantity}
                    />
                ))}
                <button
                    onClick={updateReqParts}
                    className="mt-4 mb-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Use These Parts?
                </button>
            </div>
        </div>
    );
};

export default ServiceCenter;
