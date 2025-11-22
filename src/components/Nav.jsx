import React from "react";
import piggy from "../assets/porco.png";
import {useState} from 'react';
import HogTile from './HogTile';
import hogs from '../porkers_data';
import {Button} from 'semantic-ui-react';
import HogList from "./HogList";

const Nav = () => {
	// map over all hogs to render individual HogTile component
	// identifier key is the name, the object to be passed to the child component is from the hogs array, prop that indicates that the tile was clicked is isClicked 
	return (
		<div className="navWrapper">
			<span className="headerText">HogWild</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">
				A React App for County Fair Hog Fans
			</span>
			<div className="hog-display">
				<HogList />
			</div>
		</div>
	);
};

export default Nav;
