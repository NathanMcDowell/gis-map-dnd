var map = L.map('map', {
    crs: L.CRS.Simple
});

// Define image size in pixels
var bounds = [[0,0], [1024,1327]]; // height, width in pixels 3981/3072
L.imageOverlay('images/primior-map.jpg', bounds).addTo(map);
map.fitBounds(bounds);
// map.setMaxBounds(bounds);

var skullIcon = L.icon({
    iconUrl: 'images/witherskull.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [50, 50], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([200, 300], {icon: skullIcon}).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();


var popup = L.popup();
// var marker = L.marker([51.5, -0.09]).addTo(map);

// var circle = L.circle([51.508, -0.11], {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 500
// }).addTo(map);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);


