
    function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(51.508742,-0.120850),
      zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    }

    
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCuayMV9gg8-0gIbDYxjPioTwjOkNH0ImI&callback=myMap"></script>