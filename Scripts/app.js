
var directionfields = {from:49.2606, to:-123.2460}

var direction = document.getElementById("direction")


function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.261199779342405, -123.24890381012028),
    zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  const myCenter = { lat: 49.261199779342405, lng: -123.24890381012028 };

  const mainEntrance = { lat: 49.26112013421764, lng: -123.24931284699397 };

  const leftEntrance = { lat: 49.260732, lng: -123.248916 };
  const rightEntrance = { lat: 49.26142733612942, lng: -123.24900841627249};
  const backEntranceLeft = { lat: 49.2611364, lng: -123.2483529 };
  const backEntranceRight = { lat: 49.2614651, lng: -123.248713 };

  var markers = [
  
    { position: myCenter,
      title: 'ICICS Building',
      icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'},
    { position: mainEntrance,
      title: 'Main Entrance' },
    { position: leftEntrance,
      title: 'Left Entrance' },
    { position: rightEntrance,
      title: 'Right Entrance' },
    { position: backEntranceLeft,
      title: 'Back Entrance (Left side of building)' },
    { position: backEntranceRight,
      title: 'Back Entrance (Right side of building)' },

  ];

  markers.forEach(function (markerInfo) {
    var marker = new google.maps.Marker({
        position: markerInfo.position,
        map: map,
        title: markerInfo.title,
        icon: markerInfo.icon
    });
});


  //varible NorthWest of ICICS @ Longitude: 49.262072, Latitude: -123.250419
  var northWestLong = 49.262072;
  var northWestLat = -123.250419;
  const northWest = { lat: northWestLong, lng: northWestLat };

  //varible NorthEast of ICICS @ Longitude: 49.2625, Latitude: -123.2474
  var northEastLong = 49.2625;
  var northEastLat = -123.2474;
  const northEast = { lat: northEastLong, lng: northEastLat };

  //varible SouthWest of ICICS @ Longitude: 49.259097, Latitude: -123.249079
  var southWestLong = 49.259097;
  var southWestLat = -123.249079;
  const southWest = { lat: southWestLong, lng: southWestLat };

  //varible SouthEast of ICICS @ Longitude: 49.260634, Latitude: -123.244685
  var southEastLong = 49.260634;
  var southEastLat = -123.244685;
  const southEast = { lat: southEastLong, lng: southEastLat };

  //marker for NorthWest Starting Point
  var markerNW = new google.maps.Marker({ 
    title: "Main Mall",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northWest });

  //marker for NorthEast Starting Point
  var markerNE = new google.maps.Marker({ 
    title: "UBC Chemical and Biological Engineering",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northEast });

  //marker for SouthWest Starting Point
  var markerSW = new google.maps.Marker({ 
    title: "Thunderbird Crescent",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: southWest });
  
  //marker for SouthEast Starting Point
  var markerSE = new google.maps.Marker({ 
    title: "Thunderbird Blvd",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: southEast });

  


}

window.onload=function(){
document.getElementById("direction").addEventListener("submit", function(event) {
 event.preventDefault();  // Prevents the default form submission

  // Get input values
  directionfields.from = document.getElementById("from").value;
  directionfields.to = document.getElementById("to").value;

  // Do something with the values (for example, log them to the console)
  console.log(directionfields.from );
  console.log(directionfields.to);

});}
  // You can also send the data to a server using AJAX or fetch API

  // Reset the form if needed
  // this.reset();

