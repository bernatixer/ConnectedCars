import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function loadAPI() {
    if (typeof window !== 'undefined') {
        const script = document.createElement('script');
        script.src =
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyBYggAidKpuAbwGNtc70x3WK6upK092ZJo&callback=initMap';
        script.async = true;
        script.defer = true;

        document.body.appendChild(script);
    }
}

class Mapa extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (typeof window !== 'undefined') {
            const script = document.createElement('script');
            script.onload = () => loadAPI();
            script.src = '/js/maps.js';
            document.body.appendChild(script);
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-9" id="map">
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
    }
}

export default Mapa;
