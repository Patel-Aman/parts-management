import React, { useState } from "react";
import { Input, Button, Label, Select } from "@windmill/react-ui";

function AddPartsForm({ onAddPart }) {
    const [part, setPart] = useState({
        name: "",
        sku: "",
        quantity: "",
        manufacturer: "",
        model: "",
        partType: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPart({
            ...part,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation here if needed
        onAddPart(part);
        // Reset the form
        setPart({
            name: "",
            sku: "",
            quantity: "",
            manufacturer: "",
            model: "",
            partType: "",
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Label>
                <span>Part Name</span>
                <Input
                    id="name"
                    name="name"
                    type="text"
                    value={part.name}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>SKU ID</span>
                <Input
                    name="sku"
                    type="text"
                    value={part.sku}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>Quantity</span>
                <Input
                    name="quantity"
                    type="number"
                    value={part.quantity}
                    onChange={handleChange}
                    required
                />
            </Label>

            <Label>
                <span>Manufacturer</span>
                <Input
                    name="manufacturer"
                    type="text"
                    value={part.manufacturer}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Model</span>
                <Input
                    name="model"
                    type="text"
                    value={part.model}
                    onChange={handleChange}
                />
            </Label>

            <Label>
                <span>Part Type</span>
                <Select
                    name="partType"
                    value={part.partType}
                    onChange={handleChange}
                >
                    <option value="">Select Type</option>
                    <option value="Type A">Type A</option>
                    <option value="Type B">Type B</option>
                    <option value="Type C">Type C</option>
                </Select>
            </Label>

            <Button type="submit" block>
                Add Part
            </Button>
        </form>
    );
}

export default AddPartsForm;
