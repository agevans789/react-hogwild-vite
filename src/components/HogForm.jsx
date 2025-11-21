import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

export default function HogForm({hogs}) {
    const [currentHogs, setCurrentHogs] = useState(hogs);
    
    const handleAdd = (hogToAdd) => {
        const hogExists = currentHogs.some(currentHog => {
            return currentHog.id === hogToAdd.randomUUID();
        });
        if (!hogExists) {
            setCurrentHogs([...currentHogs, hogToAdd]);
        };
    };

    const handleSubmit = (e, newHog) => {
        e.preventDefault();
        handleAdd(newHog);
    };
    return (
        <div className="">
            <form className="ui form" onSubmit={handleSubmit}>
                <label htmlFor="Name:">Name:</label>
                <input type="text" id="Name:"></input>
                <label htmlFor="Weight:">Weight:</label>
                <input type="number" id="Weight:"></input>
                <label htmlFor="Specialty:">Specialty:</label>
                <input type="text" id="Specialty:"></input>
                <label htmlFor="Greased?">Greased?</label>
                <input type="checkbox" id="Greased?"></input>
                <button className="ui button" type="submit">Add Hog</button>
            </form>
        </div>
    );
};