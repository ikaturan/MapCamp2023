

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
  
    { position: myCenter },
    { position: mainEntrance },
    { position: leftEntrance },
    { position: rightEntrance },
    { position: backEntranceLeft },
    { position: backEntranceRight },

  ];

  markers.forEach(function (markerInfo) {
    var marker = new google.maps.Marker({
        position: markerInfo.position,
        map: map,
        title: markerInfo.title
    });
});


}
