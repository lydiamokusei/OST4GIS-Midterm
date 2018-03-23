//add popups when clicking the markers on map
var myPopup = function(feature) {
    var list1 = "<dt><strong>Agency Name</strong></dt>" +
               "<dt>" + feature.properties.NAME + "</dt>"+
               "<dt><strong>Address</strong></dt>" +
               "<dt>" + feature.properties.ADDRESS + "</dt>"+
               "<dt><strong>Zip Code</strong></dt>" +
               "<dt>" + feature.properties.ZIP + "</dt>";
    return list1;
};
//plot markers on the map
var plotMarkers = function(){
  featureGroup = L.geoJson(parsedData,{
    style:myStyle,
    filter:filterData,
    pointToLayer: function(feature, latlng){
      return L.circleMarker(latlng, myStyle).bindPopup(myPopup(feature));
    }
  }).addTo(map);
};

//style each slide
var myStyle = function(feature){
  return slideDeck[slideNumber].style;
};

//filter data for each slide
var filterData = function(feature){
  if (slideNumber === 0){
    return true;
  }
  else if (slideNumber === 1){
    if(feature.properties.PREVENTION === "Y" && feature.properties.PRE_PURCHA === "Y") {
      return true;
    }
  }
  else if (slideNumber === 2){
    if (feature.properties.SENIORS === "Y") {
      return true;
    }
  } else if (slideNumber === 3){
    if(feature.properties.PREVENTION === "Y" && feature.properties.PRE_PURCHA === "Y" && feature.properties.SENIORS === "Y"){
      return true;
    }
  } else if (slideNumber === 4){
    if (feature.properties.OTHER === "HIV/AIDS-related housing counseling only"){
      return true;
    }
  }  else if (slideNumber === 5){
      if (feature.properties.OTHER === "Tenant-related counseling only"){
        return true;
  }
  console.log(slideNumber);
 }
};

//set the zoom level for each slide
var zoom = function(){
  map.setView(slideDeck[slideNumber].center, slideDeck[slideNumber].zoom);
};

//show contents for specific slides only
var showContent = function(){
  if (slideNumber ===2 || slideNumber === 3){
    $(".slide3").show();
    $(".slide5").hide();
    $(".slide6").hide();
  }else if(slideNumber === 4){
    $(".slide5").show();
    $(".slide3").hide();
    $(".slide6").hide();
  }else if(slideNumber === 5){
    $(".slide6").show();
    $(".slide3").hide();
    $(".slide5").hide();
  }
  else{
    $(".slide3").hide();
    $(".slide5").hide();
    $(".slide6").hide();
  }
};
//set initial slide
var initialSlide = function(){
    slideNumber = 0;
    $("#title").text(slideDeck[0].title);
    $("#intro").html(slideDeck[0].intro);
    $('.previous').hide();
    $('.next').show();
    removeData();
    plotMarkers();
    showContent();
    zoom();
};
//set last slide
var lastSlide = function(){
    $("#title").text(slideDeck[(slideDeck.length - 1)].title);
    $("#intro").html(slideDeck[(slideDeck.length - 1)].intro);
    $('.previous').show();
    $('.next').hide();
    slideNumber = slideNumber + 1;
    removeData();
    plotMarkers();
    showContent();
    zoom();
};
//increase slide number and call function to show slide
var nextSlide = function() {
  if (slideNumber < slideDeck.length - 1) {
    $('.previous').show();
    $('.next').show();
    slideNumber = slideNumber + 1;
    $("#title").text(slideDeck[slideNumber].title);
    $("#intro").html(slideDeck[slideNumber].intro);
    removeData();
    plotMarkers();
    showContent();
    zoom();
  }
  return slideNumber;
};

//decrease slide number and call function to show slide
var previousSlide = function() {
  if (slideNumber > 0){
    $('.previous').show();
    $('.next').show();
    slideNumber = slideNumber - 1;
    $("#title").text(slideDeck[slideNumber].title);
    $("#intro").html(slideDeck[slideNumber].intro);
    removeData();
    plotMarkers();
    showContent();
    zoom();
  }
  return slideNumber;
};

//click next/previous button to show the slide
var clickButton = function(){
  $( ".next" ).click(function() {
    if(slideNumber === slideDeck.length-2){
      lastSlide();
    }
    else{
      nextSlide();
    }
    });

  $(".previous").click(function(){
    if(slideNumber === 1){
      initialSlide();
    }else{
      previousSlide();
    }
   });
 };

//remove plot data from the map
var removeData = function(){
  if (typeof featureGroup !== 'undefined') {
    map.removeLayer(featureGroup);
  }
};
