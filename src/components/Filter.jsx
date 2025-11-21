import React from "react";
import { useState } from "react";

export default function Filter({onChangeShowGreased, filteredHogs, hogs}) {
    const [filterHogs, setFilterHogs] = useState(filteredHogs);
	const handleFilterHogs = (e) => {
        if (onChangeShowGreased) {
            onChangeShowGreased(e.target.checked);
        };
		setFilterHogs((filterHogs) => 
			filterHogs === hogs ? filteredHogs : hogs
		);};
    return (
        <div className="ui menu">
            <div className="ui item">
                <label htmlFor="sortFilter">Sort by:</label>
                <select id="sortFilter" className="ui selection dropdown">
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
            <div className="ui item">
                <label htmlFor="filter-greased">Greased Pigs Only</label>
                <input id="filter-greased" type="checkbox" className="ui toggle checkbox" onChange={handleFilterHogs}></input>
            </div>
        </div>
    );
};