import React from "react";
import Nav from "./Nav";
import {useState} from 'react';
import hogData from "../porkers_data";
import 'semantic-ui-css/semantic.min.css'
import HogList from "./HogList";
import HogForm from "./HogForm";
import Filter from "./Filter";

function App() {
	const [showGreased, setShowGreased] = useState(false);
	const [hogs, setHogs] = useState(hogData);
	const [sortBy, setSortBy] = useState("name");

	function handleShowGreased(greased, e) {
		setShowGreased((previous) => !previous);
	};
	function handleSortBy(sort, e) {
		setSortBy((previous) => sort);
	};

	function handleAddHog(newHog, e) {
		setHogs((existing) => [...existing, newHog]);}


		const filteredHogs = hogs.filter(hog => showGreased ? hog.greased : true).sort((hog1, hog2) => {
								if (sortBy === "weight") {
									return hog1.weight - hog2.weight;
								};})
                            .sort((hog1, hog2) => { if (sortBy === "name") {return hog1.name.localeCompare(hog2.name)};});
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav hogs={filteredHogs}/>
			</div>
			<div className="sixteen wide column centered">
				<Filter onChangeShowGreased={handleShowGreased} onChangeSortBy={handleSortBy}/>
			</div>
			<div className="sixteen wide column centered">
				<HogForm onAddHog={handleAddHog}/>
			</div>
			<div className="sixteen wide column centered">
				<HogList hogs={filteredHogs}/>
			</div>
		</div>
	);
};

export default App;
