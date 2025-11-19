import React from 'react';
import hogs from "../porkers_data";
import {useState} from 'react';
import {Card, Image, Button, Content, Description, Header} from 'semantic-ui-react';

const HogTile = ({hog, onShowDetails}) => {
    return (
        <Card onClick={() => onShowDetails(hog)}>
            <Image src={hog.image} wrapped ui={false} alt={hog.name} />
            <Card.Content>
                <Card.Header>{hog.name}</Card.Header>
            {onShowDetails &&
                <Card.Description>    
                    <p><strong>Specialty:</strong> {hog.specialty}</p>
                    <p><strong>Greased:</strong> {hog.greased === true ? "Yes" : "No"}</p>
                    <p><strong>Weight:</strong> {hog.weight}</p>
                    <p><strong>Highest Medal Achieved:</strong> {hog["highest medal achieved"]}</p>
                </Card.Description>
            }
            </Card.Content>
        </Card>
    )
};

export default HogTile