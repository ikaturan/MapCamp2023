
var directionfields = {
  from: { lat: 49.2606, lng: -123.2460 },
  to: { lat: 49.2606, lng: -123.2460 }
}

var direction = document.getElementById("direction")
var map;

const ICICS = {

  mainEntrance:
  {
    position: { lat: 49.26112013421764, lng: -123.24931284699397 },
    access: false,
  },
  leftEntrance:
  {
    position: { lat: 49.260732, lng: -123.248916 },
    access: true,
  },
  rightEntrance:
  {
    position: { lat: 49.26142733612942, lng: -123.24900841627249 },
    access: true,
  },
  backEntranceLS:
  {
    position: { lat: 49.2611364, lng: -123.2483529 },
    access: false,
  },
  backEntranceRS:
  {
    position: { lat: 49.2614651, lng: -123.248713 },
    access: true,
  },
}

const locations = { 'ICICS': ICICS }

function myMap() {
  var mapProp = {
    center: new google.maps.LatLng(49.261199779342405, -123.24890381012028),
    zoom: 18,
  };
  map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  const myCenter = { lat: 49.261199779342405, lng: -123.24890381012028 };




  for (let building in locations) {
    let markers = locations[building];

    for (let id in markers) {
      if (markers.hasOwnProperty(id)) {
        let markerInfo = markers[id];

        let marker = new google.maps.Marker({
          position: markerInfo.position,
          map: map,
          title: id,
          icon: markerInfo.icon
        });

      }
    }
  };




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
    id: "Main Mall",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northWest
  });

  //marker for NorthEast Starting Point
  var markerNE = new google.maps.Marker({
    id: "UBC Chemical and Biological Engineering",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northEast
  });

  //marker for SouthWest Starting Point
  var markerSW = new google.maps.Marker({
    id: "Thunderbird Crescent",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: southWest
  });

  //marker for SouthEast Starting Point
  var markerSE = new google.maps.Marker({
    id: "Thunderbird Blvd",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: southEast
  });


}



const directionfrom = document.getElementById("from")


window.onload = function () {
  myMap()
  document.getElementById("direction").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevents the default form submission

    // Get input values
    directionfields.from = document.getElementById("from").value;
    directionfields.to = document.getElementById("to").value;
    const accessible = document.getElementById("accessibilityCheck").checked

    // Do something with the values (for example, log them to the console)
    console.log(directionfields.from);
    console.log(directionfields.to);
    console.log(accessible);

    const leftEntrance = { lat: 49.260732, lng: -123.248916 };
    let directionsService = new google.maps.DirectionsService();
    let directionsRenderer = new google.maps.DirectionsRenderer();
   // let location1 = new google.maps.LatLng(49.262072, -123.250419);
    let location2 = new google.maps.LatLng(49.26112013421764, -123.24931284699397);
    directionsRenderer.setMap(map);
    console.log("Success");
    var request = {
      origin: leftEntrance,
      destination: location2,
      travelMode: 'WALKING'
    }
    directionsService.route(request, function(result, status) {
      if (status == 'OK') {
        console.log(result.routes[0].legs[0].distance.value)
        directionsRenderer.setDirections(result);
      }
    });

    



  }

  );
}


// You can also send the data to a server using AJAX or fetch API

// Reset the form if needed
// this.reset();

function switchFromTo() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  document.getElementById("from").value = to;
  document.getElementById("to").value = from;
}
