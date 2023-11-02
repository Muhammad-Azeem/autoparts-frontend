import React from 'react';

const ItemsList = ({ items }) => {
    return (
        <ul className="items-listr">
            {items.map((item, index) => (
                <li className="itemr" key={index}>
                    {item}
                </li>
            ))}
        </ul>
    );
};

export default ItemsList;
