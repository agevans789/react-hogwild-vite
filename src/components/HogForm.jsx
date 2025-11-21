import React from "react";
import { useState } from "react";
import { v4 } from "uuid";

export default function HogForm({hogs}) {
    const [currentHogs, setCurrentHogs] = useState(hogs);
    const [weight, setWeight] = useState("");
    const [name, setName] = useState("");
    const [specialty, setSpecialty] = useState("");
    const [greased, setGreased] = useState(false);
    const [image, setImage] = useState("");
    const [highestMedalAchieved, setHighestMedalAchieved] = useState("");
    
    const handleAdd = (e) => {
        const hogExists = currentHogs.some(currentHog => {
            return currentHog === e;
        });
        if (!hogExists) {
            setCurrentHogs([...currentHogs, e]);
        };
    };

    const handleSubmit = (e, newHog) => {
        e.preventDefault();
        const submittedHog = {
            id: v4(),
            name: name,
            weight: weight,
            specialty: specialty,
            greased: greased,
            image: image,
            "highest medal achieved": highestMedalAchieved
        };
        setName("");
        setWeight("");
        setSpecialty("");
        setGreased(false);
        setImage("");
        setHighestMedalAchieved("");
        handleAdd(submittedHog);
    };


    return (
        <div className="New Hog Form">
            <form className="ui form" onSubmit={handleSubmit}>
                <label htmlFor="Name:">Name:</label>
                <input type="text" id="Name:" value={name} onChange={(e) => setName(e.target.value)}></input>
                <label htmlFor="Weight:">Weight:</label>
                <input type="number" id="Weight:" value={weight} onChange={(e) => setWeight(e.target.value)}></input>
                <label htmlFor="Specialty:">Specialty:</label>
                <input type="text" id="Specialty:" value={specialty} onChange={(e) => setSpecialty(e.target.value)}></input>
                <label htmlFor="Greased?">Greased?</label>
                <input type="checkbox" id="Greased?" checked={greased} onChange={(e) => setGreased(e.target.checked)}></input>
                <label htmlFor="Image">Image URL</label>
                <input type="text" id="Image" value={image} onChange={(e) => setImage(e.target.value)}></input>
                <label htmlFor="Highest Medal Achieved">Highest Medal Achieved</label>
                <input type="text" id="Highest Medal Achieved" value={highestMedalAchieved} onChange={(e) => setHighestMedalAchieved(e.target.value)}></input>
                <button className="ui button" type="submit">Add Hog</button>
            </form>
        </div>
    );
};