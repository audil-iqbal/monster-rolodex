import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className='card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`} />
        <p>{props.monster.name}</p>
        <p>{props.monster.email}</p>
    </div>
)