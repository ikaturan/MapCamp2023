
    function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(49.2606, -123.2460),
      zoom:16,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

    // Create a marker and set its position
    var marker = new google.maps.Marker({
        position: { lat: 49.2606, lng: -123.2460 },
        map: map,
        title: 'My Marker' // Optional title for the marker
        
      });
    }

    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuayMV9gg8-0gIbDYxjPioTwjOkNH0ImI&callback=myMap"></script>