(function(){
    'use strict';

    var map = L.map('map').setView([36.083270, -119.074590], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([36.070, -119.077]).addTo(map);

    marker.bindPopup("<b>SCCA Go Bears!</b><br>This is my old highschool.").openPopup();

    var circle = L.circle([36.085, -119.074], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    circle.bindPopup("Where I used to live.");

    var polygon = L.polygon([
        [36.082, -119.034],
        [36.080, -119.050],
        [36.075, -119.040]
    ]).addTo(map);

    polygon.bindPopup("Best shopping area.");
    
}());