import React from 'react';
import Card from './Card';
import './CardList.css';

function CardList() {
    return (
        <div className="CardList col-8">
            CardList
            {/* //! map over results */}
            <Card />
        </div>
    );
}

export default CardList;