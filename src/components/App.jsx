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
	return (
		<div className="ui grid container App">
			<div className="sixteen wide column centered">
				<Nav hogs={hogs}/>
			</div>
			<div className="sixteen wide column centered">
				<Filter onChangeShowGreased={handleShowGreased} hogs={hogs}/>
			</div>
			<div className="sixteen wide column centered">
				<HogForm/>
			</div>
			<div className="sixteen wide column centered">
				<HogList hogs={filteredHogs}/>
			</div>
		</div>
	);
};

export default App;
