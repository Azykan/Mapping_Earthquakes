// Add console.log to check to see if our code is working.
console.log("working");

  // We create the tile layer that will be the background of our map.
//let streets = L.tileLayer('https://api.mapbox.com/styles/mapbox/dark-v10/{z}/{x}/{y}?access_token={accessToken}', {
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {

  attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
//We create the tile layer that will be the bckground of our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',  
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
//dark.addTo(map);

// Create a base layer that holds both maps.
let baseMaps = {
  "Street": streets,
  "Satellite Streets": satelliteStreets
  //Dark: dark
};

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
  center: [43.7, -79.3],
  zoom: 11,
  layers: [satelliteStreets]
  //layers: [streets]
});

//Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);

// Accessing the Toronto neighborhoods GeoJSON URL.
let torontoHoods = "https://raw.githubusercontent.com/Azykan/Mapping_Earthquakes/main/torontoNeighborhoods.json";
// Accessing the Toronto airline routes GeoJSON URL.
//let torontoData = "https://raw.githubusercontent.com/Azykan/Mapping_Earthquakes/main/torontoRoutes.json";
//let airportData = "https://raw.githubusercontent.com/Azykan/Mapping_Earthquakes/main/majorAirports.json" ;

// Grabbing our GeoJSON Neighborhood data.
d3.json(torontoHoods).then(function(data) {
  console.log(data);

//Creating a GeoJSON layer with Neighborhood data
L.geoJson(data, {
  style: myStyle,
  onEachFeature: function (feature, layer) {
    console.log(layer);
    layer.bindPopup('<h2>' + feature.properties.AREA_NAME + '</h2>');
  },
}).addTo(map);
});

//Create a style for the lines.
  let myStyle = {
  color: "blue",
  fillColor: "yellow",
  weight: 1,
  };
// Grabbing our GeoJSON data.
//d3.json(airportData).then(function(data) {
//d3.json(torontoData).then(function(data) {
//console.log(data);

// Creating a GeoJSON layer with the retrieved data.
//L.geoJSON(data, {
  //style: myStyle,
  //onEachFeature: function(feature, layer) {
    //layer.bindPopup("<h3> AREA_NAME: " + feature.properties.AREA_NAME + "</h3> <hr><h3> Destination: " 
    //+ feature.properties.dst + "</h3>");
  //}
//.addTo(map);
//})
//.addTo(map);
