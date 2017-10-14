import React from 'react';
import { Link } from 'react-router-dom';
import initMap from './maps';

const Mapa = () => (
    <div className="row">
        <div className="col-sm-9" id="map">
            <span />
        </div>
        {initMap()}
        <script
            async
            defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBYggAidKpuAbwGNtc70x3WK6upK092ZJo&callback=initMap"
        />
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
