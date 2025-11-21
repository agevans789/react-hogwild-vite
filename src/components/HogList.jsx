import React from "react";
import { useState } from "react";
import HogTile from "./HogTile";

export default function HogList({hogs}) {
    if (!hogs){
        return <div>Loading hogs...</div>
    } const cards = hogs.map((hog) => {
        return <HogTile hog={hog} key={hog.name}/>
    });
    return (
        <div className="ui three stackable">
            {cards}
        </div>
    )
}