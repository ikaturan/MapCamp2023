

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.2606, -123.2460),
    zoom: 17,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  const myCenter = { lat: 49.2606, lng: -123.2460 };

  var marker = new google.maps.Marker({ position: myCenter });

  marker.setMap(map);

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
  var markerNW = new google.maps.Marker({ position: northWest });
  markerNW.setMap(map);

  //marker for NorthEast Starting Point
  var markerNE = new google.maps.Marker({ position: northEast });
  markerNE.setMap(map);

  //marker for SouthWest Starting Point
  var markerSW = new google.maps.Marker({ position: southWest });
  markerSW.setMap(map);

  //marker for SouthEast Starting Point
  var markerSE = new google.maps.Marker({ position: southEast });
  markerSE.setMap(map);

  


}
