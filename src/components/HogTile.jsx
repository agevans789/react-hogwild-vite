import React, { useState } from 'react';
import hogs from "../porkers_data";

const HogTile = ({hog, onShowDetails, onClickedTile}) => {
    const [showDetails, setShowDetails] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    const handleClick = () => {
        setShowDetails((previousState) => !previousState);
    };   

    if (isHidden) {
        return null;
    };

    return (
        <div aria-label="hog card" className="ui card eight wide column" onClick={handleClick}>
            <div className="card">
                <div className="image">
                    <img src={hog.image} alt={`Photo of ${hog.name}`} width={250} height={200}/>
                </div>
                <div className="content">
                    <h3 className='header'>{hog.name}</h3>
                    <div className="description">Specialty: {hog.specialty}</div>
                    {showDetails ? <div className='extra content'>
                        <strong>{hog.greased ? "Greased" : "Nongreased"}</strong>
                        <p>Highest Medal Achieved:<strong> {hog["highest medal achieved"]}</strong></p>
                        <p>Weight:<strong> {hog.weight}</strong></p>
                    </div> : null}
                    <button className="ui button" onClick={(e) => setIsHidden((previous) => !previous)}>Hide Me</button>
                </div>
            </div>
        </div>
    )
};
  

export default HogTile;