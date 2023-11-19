
var directionfields = {from:49.2606, to:-123.2460}

var direction = document.getElementById("direction")


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