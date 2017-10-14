import React from 'react';
import { Link } from 'react-router-dom';

const Mapa = () => (
    <div className="row">
        <div className="map col-sm-9" style={{ backgroundColor: 'black' }}>
            <span />
        </div>
        <div className="participants col-sm-3">
            <ul className="list-group">
                <li className="list-group-item">Item 1</li>
                <li className="list-group-item">Item 2</li>
                <li className="list-group-item">Item 3</li>
                <li className="list-group-item">Item 4</li>
                <li className="list-group-item">Item 5</li>
            </ul>
        </div>
    </div>
);

export default Mapa;
