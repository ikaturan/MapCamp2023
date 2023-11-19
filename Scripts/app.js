

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
      color: 'blue'},
    { position: mainEntrance,
      title: 'Main Entrance',
      color: 'red' },
    { position: leftEntrance,
      title: 'Left Entrance',
      color: 'red' },
    { position: rightEntrance,
      title: 'Right Entrance',
      color: 'red' },
    { position: backEntranceLeft,
      title: 'Back Entrance (Left side of building)',
      color: 'red' },
    { position: backEntranceRight,
      title: 'Back Entrance (Right side of building)',
      color: 'red' },

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


