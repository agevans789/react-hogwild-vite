import React from "react";
import Nav from "./Nav";
import {useState} from 'react';
import hogs from "../porkers_data";
import 'semantic-ui-css/semantic.min.css'
import HogList from "./HogList";
import HogForm from "./HogForm";
import Filter from "./Filter";

function App() {
	const [showGreased, setShowGreased] = useState(false);

	function handleShowGreased(e) {
		setShowGreased((previous) => !previous);
	};

	const filteredHogs = hogs.filter(hog => showGreased ? hog.greased : true);
	
	// sort hogs based on name and weight
	const [sortBy, setSortBy] = useState("name");
	
	function handleSortBy(e) {
		setSortBy((previous) => e);
	};
	const sortedHogs = hogs.sort((hog1, hog2) =>{
								if (sortBy === "weight") {
									return hog1.weight - hog2.weight;
								};})
	const alphabeticalHogs = hogs.sort((hog1, hog2) => { if (sortBy === "name") {return hog1.name.localeCompare(hog2.name)};});
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav hogs={hogs}/>
			</div>
			<div className="sixteen wide column centered">
				<Filter onChangeShowGreased={handleShowGreased} hogs={hogs} onChangeSortBy={handleSortBy}/>
			</div>
			<div className="sixteen wide column centered">
				<HogForm/>
			</div>
			<div className="sixteen wide column centered">
				<HogList hogs={hogs} filteredHogs={filteredHogs} sortedHogs={sortedHogs} alphabeticalHogs={alphabeticalHogs}/>
			</div>
		</div>
	);
};

export default App;
