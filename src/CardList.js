import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList({ results }) {
    return (
        <div className="CardList col-8">
            <Card />
        </div>
    );
}

export default CardList;