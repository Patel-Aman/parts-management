import React, { useState } from "react";
import { Input, Label, Button } from "@windmill/react-ui";

function AddCustomer({ onSubmit }) {
    const [formData, setFormData] = useState({
        customerName: "",
        productId: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Call the onSubmit callback with the form data
        onSubmit(formData);

        setFormData({
            customerName: "",
            productId: "",
            email: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label>
                <span>Customer Name</span>
                <Input
                    id="customerName"
                    name="customerName"
                    type="text"
                    placeholder="Full name"
                    value={formData.customerName}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>SKU ID / Product ID</span>
                <Input
                    id="productId"
                    name="productId"
                    type="text"
                    placeholder="e.g. PRT-BRD-MDL-001"
                    value={formData.productId}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>Email</span>
                <Input
                    id="email"
                    placeholder="Hello@xyz.com"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Button type="submit" block>
                Add Customer
            </Button>
        </form>
    );
}

export default AddCustomer;
