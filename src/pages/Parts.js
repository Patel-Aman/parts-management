import React, {useEffect, useState} from "react";
// import partsData from "../assets/json/parts.json";
import SparePartCard from "../components/Cards/SparePartCard";
import AddPartForm from "../components/Forms/AddPart";
import apiConfig from "../utils/apiConfig";

const Parts = () => {
    const [sparePartsData, setSparePartsData] = useState([]);

    useEffect(() => {
        // Define an async function to fetch the data
        async function fetchPartsData() {
            try {
                const response = await apiConfig.get("/getParts");
                // Assuming the response contains an array of parts
                const parts = response.data;
                setSparePartsData(parts);
            } catch (error) {
                console.error("Error fetching parts:", error);
            }
        }

        // Call the async function to fetch data
        fetchPartsData();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            {sparePartsData && sparePartsData.length>0 && sparePartsData.map((part) => (
                <SparePartCard key={part.skuid} sparePart={part} />
            ))}
            <AddPartForm />
        </div>
    );
};

export default Parts;
