import React from 'react';
import SelectSearch from "react-select-search";
import { useRef } from "react";

const Select = () => {
    const searchInput = useRef();
    const options = [
                { name: "Collection One", value: "1" },
                { name: "Collection Two", value: "2" },
                { name: "Collection Three", value: "3" },
                { name: "Collection Four", value: "4" },
                { name: "Collection Five", value: "5" }
    ];

    const handleChange = (...args) => {
        // searchInput.current.querySelector("input").value = "";
        console.log("ARGS:", args);

        console.log("CHANGE:");
    };

    const handleFilter = (items) => {
        return (searchValue) => {
            if (searchValue.length === 0) {
                return options;
            }
            return items.filter((item) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase());
            })
        };
    };

    return (
            <SelectSearch
                ref={searchInput}
                options={options}
                filterOptions={handleFilter}
                value=""
                name="Workshop"
                placeholder="Choose a collection"
                search
                onChange={handleChange}
            />
    );
};

export default Select