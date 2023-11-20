
var directionfields = {
  from: { lat: 49.2606, lng: -123.2460 },
  to: { lat: 49.2606, lng: -123.2460 }
}

var direction = document.getElementById("direction")
var map;
var startingLocation;
var markerNW;
var markerNE;
var markerSW;
var markerSE;


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




  for (let buildings in locations) {
    let building = locations[buildings];

    for (let door in building) {
      if (building.hasOwnProperty(door)) {
        let markerInfo = building[door];

        let marker = new google.maps.Marker({
          position: markerInfo.position,
          map: map,
          title: door,
          icon: markerInfo.icon
        });

      }
    }
  };




  //varible NorthWest of ICICS @ Latitude: 49.262072, Longitude: -123.250419
  var northWestLat = 49.262072;
  var northWestLong = -123.250419;
  const northWest = { lat: northWestLat, lng: northWestLong };

  //varible NorthEast of ICICS @ Latitude: 49.2625, Longitude: -123.2474
  var northEastLat = 49.2625;
  var northEastLong = -123.2474;
  const northEast = { lat: northEastLat, lng: northEastLong };

  //varible SouthWest of ICICS @ Latitude: 49.259097, Longitude: -123.249079
  var southWestLat = 49.259097;
  var southWestLong = -123.249079;
  const southWest = { lat: southWestLat, lng: southWestLong };

  //varible SouthEast of ICICS @ Latitude: 49.260634, Longitude: -123.244685
  var southEastLat = 49.260634;
  var southEastLong = -123.244685;
  const southEast = { lat: southEastLat, lng: southEastLong };

  //marker for NorthWest Starting Point
  markerNW = new google.maps.Marker({
    id: "Main Mall",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northWest
  });

  //marker for NorthEast Starting Point
  markerNE = new google.maps.Marker({
    id: "UBC Chemical and Biological Engineering",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: northEast
  });

  //marker for SouthWest Starting Point
  markerSW = new google.maps.Marker({
    id: "Thunderbird Crescent",
    map,
    icon: 'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
    position: southWest
  });

  //marker for SouthEast Starting Point
  markerSE = new google.maps.Marker({
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
    let accessible = document.getElementById("accessibilityCheck").checked

    // Do something with the values (for example, log them to the console)
    console.log(directionfields.from);
    console.log(directionfields.to);
    console.log(accessible);
  
  isAccessTrue()

  function isAccessTrue() {
    let accessibleDoors = Object.assign({}, ICICS);
    if (accessible === true) {
      for (let door in accessibleDoors) {
        if (accessibleDoors[door].access === false) {
          delete accessibleDoors[door];
          let accessiblePositions = Object.values(accessibleDoors).map(doors => doors.position);
          console.log(accessiblePositions);
        }}}
    else if (accessible === false)
    { let accessiblePositions = Object.values(accessibleDoors).map(doors => doors.position);
      console.log(accessiblePositions);}
  }

        // Produce marker's Latitude and Longitude; else produce error message
    if (directionfields.from == markerNW.id) {
      startingLocation = markerNW.position;
    } else if (directionfields.from == markerNE.id) {
      startingLocation = markerNE.position;
    } else if (directionfields.from == markerSW.id) {
      startingLocation = markerSW.position;
    } else if (directionfields.from == markerSE.id) {
      startingLocation = markerSE.position;
    } else {
      startingLocation = "Error: Location not found.";
    }


  
  

    console.log(startingLocation);








 

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




