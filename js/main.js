var map = L.map('map', {
  center: [40.003215, -75.143526],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

//get dataset
var dataset = "https://raw.githubusercontent.com/CPLN-692-401/datasets/master/geojson/HousingCounselingAgencies.geojson";
var featureGroup;
var parsedData;
//initialize slide number
var slideNumber = 0;

//parse data
$.ajax(dataset).done(function(data){
 parsedData = JSON.parse(data);
});

$(document).ready(function() {
  $.ajax(dataset).done(function(data){
    parsedData = JSON.parse(data);
    initialSlide();
    clickButton();
  });
});
