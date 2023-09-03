import React, { useEffect, useState } from "react";
import ProductModelCard from "../components/Cards/ProductModelCard";
import apiConfig from "../utils/apiConfig";
import PageTitle from "../components/Typography/PageTitle";
import AddProductForm from "../components/Forms/AddProductForm";

const Models = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function FetchProducts() {
            try {
                const response = await apiConfig.get("/getProducts");
                // Assuming the response contains an array of parts
                const models = response.data;
                setProducts(models);
            } catch (error) {
                console.error("Error fetching Products:", error);
            }
        }

        FetchProducts();
    }, []);
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
            <PageTitle>Products</PageTitle>
            {products.map((product) => (
                <ProductModelCard key={product.skuid} product={product} />
            ))}
            <PageTitle>Add Product</PageTitle>
            <AddProductForm />
        </div>
    );
};

export default Models;
