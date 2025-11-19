import React from "react";
import Nav from "./Nav";
import {useState} from 'react';
import hogs from "../porkers_data";
import 'semantic-ui-css/semantic.min.css'

function App() {
	// display tile for each hog
	// when you click on tile, display details
	// set up ternary operation to show which tiles have been clicked
	const [clickedTile, setClickedTile] = useState(null);
	// individual hog object is the argument
	const displayDetails = (hog) => {
		// toggle between clicked and not clicked
		// one condition will show nothing, the other will show the details of the object
		setClickedTile(clickedTile === hog ? null : hog)
	};
	
	
	// filter for greased hogs
	// set up ternary operation to show current value of search input
	const [filterHogs, setFilterHogs] = useState('all');
	// create new array of filtered hogs
	const filteredHogs = hogs.filter(hog => hog.greased === true);
	const handleFilterHogs = (e) => {
		setFilterHogs((filterHogs) => 
			filterHogs === hogs ? filteredHogs : hogs
		)};
	// sort hogs based on name and weight
	return (
		<div className="App">
			<Nav hogs={hogs} displayDetails={displayDetails}/>
		</div>
	);
};

export default App;
