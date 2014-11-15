function main() {
	getLocation();
	var cuisine = document.getElementById("cuisine").value;
	var cost = document.getElementById("cost").value;
	var distance = document.getElementById("distance").value;
	console.log(cuisine);
	console.log(cost);
	console.log(distance);	
}

// onSuccess Callback
// This method accepts a Position object, which contains the
// current GPS coordinates
//
var onSuccess = function(position) {
    alert('Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n');
    document.getElementById("demo").innerHTML = "Success!";
};

// onError Callback receives a PositionError object
//
function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
    document.getElementById("demo").innerHTML = "Failure :(";
}

function getLocation () {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
    document.getElementById("demo").innerHTML = "I was called";
}