var map = L.map('map', {
    crs: L.CRS.Simple
});

// Define image size in pixels
var bounds = [[0,0], [1024,1327]]; // height, width in pixels 3981/3072
L.imageOverlay('images/primior-map.jpg', bounds).addTo(map);
map.fitBounds(bounds);
// map.setMaxBounds(bounds);

var cityIcon = L.icon({
    iconUrl: 'images/city_marker.png',
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [20, 20], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var locationIcon = L.icon({
    iconUrl: 'images/location_marker.png',

    iconSize:     [16, 16], // size of the icon
    iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});
var townIcon = L.icon({
    iconUrl: 'images/town_marker.png',

    iconSize:     [16, 16], // size of the icon
    iconAnchor:   [8, 8], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, 0] // point from which the popup should open relative to the iconAnchor
});

// var marker = L.marker([200, 300], {icon: cityIcon}).addTo(map);
// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var allstrenMarker = L.marker([362, 429], {icon: cityIcon}).addTo(map);
allstrenMarker.bindPopup("<b>Allstren</b><br>The capital city of Primior and seat of the Appointed Triad.").openPopup();

var frelledinMarker = L.marker([484, 662], {icon: cityIcon}).addTo(map);
frelledinMarker.bindPopup("<b>Frelledin</b><br>A rich city home to the highest university in Primior.").openPopup();

var kastenfornMarker = L.marker([633, 939], {icon: cityIcon}).addTo(map);
kastenfornMarker.bindPopup("<b>Kastenforn</b><br>This city exports forged metal using traditional dwarvish techniques. A large sinkhole in the middle of the city makes the city ring shaped from above.").openPopup();

var levrinMarker = L.marker([669, 446], {icon: cityIcon}).addTo(map);
levrinMarker.bindPopup("<b>Levrin</b><br>Levrin is a northern city that many adventurers and wilderness explorers rest at between excursions.").openPopup();

var unbarranMarker = L.marker([812, 918], {icon: cityIcon}).addTo(map);
unbarranMarker.bindPopup("<b>Ūn Barran</b><br>The last occupied dwarven stronghold in Primior. Most of the region's metal is mined here.").openPopup();

var westhavenMarker = L.marker([560, 347], {icon: cityIcon}).addTo(map);
westhavenMarker.bindPopup("<b>Westhaven</b><br>This city is home to some of the greatest smiths in the world.").openPopup();

var postenMarker = L.marker([171, 442], {icon: cityIcon}).addTo(map);
postenMarker.bindPopup("<b>Posten</b><br>Port city built largely on docks that have slowly grown longer over decades.").openPopup();

var clastienMarker = L.marker([157, 669], {icon: cityIcon}).addTo(map);
clastienMarker.bindPopup("<b>Clastien</b><br>Port city and headquarters of the regional Navy.").openPopup();

var deepholdMarker = L.marker([827, 260], {icon: locationIcon}).addTo(map);
deepholdMarker.bindPopup("<b>Deephold</b><br>Once a great dwarven city and mine, Deephold has been cursed and ruined since the Vampire was defeated.").openPopup();

var sceptersholdMarker = L.marker([508, 746], {icon: locationIcon}).addTo(map);
sceptersholdMarker.bindPopup("<b>Scepter's Hold</b><br>Anciently a stronghold for a wizard's society, this enchanted tower has been cursed and abandoned since the fall of the Vampire.").openPopup();

var steamwaterMarker = L.marker([467, 162], {icon: locationIcon}).addTo(map);
steamwaterMarker.bindPopup("<b>The Steamwater Mountains</b><br>These mountains are constantly releasing steam into the air, keeping the west half of Primior warm. Hot springs dot the slopes.").openPopup();

var scatteredstonesMarker = L.marker([929, 647], {icon: locationIcon}).addTo(map);
scatteredstonesMarker.bindPopup("<b>The Scattered Stones</b><br>These mountains create the northern border of Primior. A few passes lead north to tundra and snowy forests.").openPopup();

var rimeplainMarker = L.marker([518, 1195], {icon: locationIcon}).addTo(map);
rimeplainMarker.bindPopup("<b>The Rimeplain</b><br>The humidity from the Steamwater Mountains chills over this wilderness, covering it in thick fog and snow. A few small settlements exist in this region.").openPopup();

var freecantonsMarker = L.marker([86, 84], {icon: locationIcon}).addTo(map);
freecantonsMarker.bindPopup("<b>The Free Cantons</b><br>Beyond the Steamwater Mountains is a heavily forested land called the Free Cantons. It is home to halflings and gnomes driven there by the Vampire.").openPopup();

var heathersteadMarker = L.marker([418, 1028], {icon: townIcon}).addTo(map);
heathersteadMarker.bindPopup("<b>Heatherstead</b><br>The abandoned ancestral home of the halflings. In recent years they have made efforts to restore it to it's greatness.");

var helkurnMarker = L.marker([783, 365], {icon: townIcon}).addTo(map);
helkurnMarker.bindPopup("<b>Helkurn (Skuller-town)</b><br>Back when Deephold exported metal, it would go down to Helkurn and be put on barges bound for the coast. Since the Vampire's reign, it has become home to undead hunters who call themselves 'Skullers.' The residents sometimes call it 'Skuller-town.'");

var belquinMarker = L.marker([585, 478], {icon: townIcon}).addTo(map);
belquinMarker.bindPopup("<b>Belquin</b><br>Once a prosperous city that thrived on trade, Belquin was destroyed during the revolution and is still rebuilding to it's former strength.");

var litwalynMarker = L.marker([484, 532], {icon: townIcon}).addTo(map);
litwalynMarker.bindPopup("<b>Litwalyn</b><br>Litwalyn is the home of a family of elves that have survived there for centuries.");

var belnMarker = L.marker([593, 571], {icon: townIcon}).addTo(map);
belnMarker.bindPopup("<b>Beln</b><br>Beln is on the borders of the wilderness and is home to many hunters and foresters. It also is a stop for the metal that comes from Kastenforn.");

var vendolnMarker = L.marker([45, 1096], {icon: townIcon}).addTo(map);
vendolnMarker.bindPopup("<b>Vendoln</b><br>Argueably the most remote and least affluent town in Primior, Vendoln is home to rough sailors and others who enjoy their remote privacy.");

var saltkinMarker = L.marker([155, 818], {icon: townIcon}).addTo(map);
saltkinMarker.bindPopup("<b>Saltkin</b><br>Saltkin isn't close to major trade routes and survives by catching and shipping fish.");


// var popup = L.popup();
//
var popup = L.popup();

function onMapClick(e) {

    var y = e.latlng.lat;  // vertical position
    var x = e.latlng.lng;  // horizontal position

    popup
        .setLatLng(e.latlng)
        .setContent(
            "Y: " + y.toFixed(2) +
            "<br>X: " + x.toFixed(2)
        )
        .openOn(map);
}

map.on('click', onMapClick);

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


