import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList() {
    return (
        <div className="CardList col-8">
            {/* //! map over results */}
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
    );
}

export default CardList;