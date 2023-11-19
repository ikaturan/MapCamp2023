

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.2606, -123.2460),
    zoom: 17,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
  const myCenter = { lat: 49.2606, lng: -123.2460 };

  var marker = new google.maps.Marker({ position: myCenter });

  marker.setMap(map);

}
