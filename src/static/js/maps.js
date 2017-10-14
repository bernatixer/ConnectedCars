function initMap() {
    let cons = [];

    var myInit = {
        method: 'GET',
    };

    fetch('/api/map/', myInit)
        .then(response => response.json())
        .then(response => {
            console.log(response);
        });
    
    
    const connections = [];

    for (var i = 0; i < cons.size; ++i) {
        var con = cons[i];
        connections.push({
            entrada: { lat: con.start.startLat, lng: con.start.startLon },
            sortida: { lat: con.end.endLat, lng: con.end.endLon },
        });
    }

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: {
            lat: 41.4040323,
            lng: 2.1144441,
        },
        mapTypeId: 'terrain',
    });

    var lineSymbol = {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
    };

    for (var connection in connections) {
        var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
        var cityCircle = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: map,
            center: connections[connection].sortida,
            radius: 4,
        });
        var cityCircle2 = new google.maps.Circle({
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: color,
            fillOpacity: 0.35,
            map: map,
            center: connections[connection].entrada,
            radius: 4,
        });

        var line = new google.maps.Polyline({
            path: [cityCircle.center, cityCircle2.center],
            strokeColor: color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            icons: [
                {
                    icon: lineSymbol,
                    offset: '100%',
                    strokeColor: color,
                },
            ],
            map: map,
        });
    }
}
