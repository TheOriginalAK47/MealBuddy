
function main() {
	getLocation();
	var cuisine = document.getElementById("cuisine").value;
	var cost = document.getElementById("cost").value;
	var distance = document.getElementById("distance").value;
	console.log(cuisine);
	console.log(cost);
	console.log(distance);	
  var yelp = require("yelp").createClient({
    consumer_key: "8R3VoVwlpxrL5WY5fiAZEQ", 
    consumer_secret: "KAG6oEENVoeZy-Tg13ve787pEKU",
    token: "6mmfCjlYEgM9dnzesU71mDa_JvMdJqFc",
    token_secret: "1oTxUfltNeGecmuM0bDdoA-6fWA"
  });

// See http://www.yelp.com/developers/documentation/v2/search_api
  yelp.search({term: "food,italian",, location: "Princeton University", cll=geo.coords.latitude, geo.coords.longitude}, function(error, data) {
    console.log(error);
    console.log(data);
  });

// See http://www.yelp.com/developers/documentation/v2/business
  yelp.business("yelp-san-francisco", function(error, data) {
    console.log(error);
    console.log(data);
  });
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
    var geo = navigator.geolocation.getCurrentPosition(onSuccess, onError);
    document.getElementById("demo").innerHTML = "I was called";
}