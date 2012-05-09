var myapp = require("./myapp");

// Example of what a function would look like that a route called
var getPlayers = function(params, callback) {

	// Call the getPlayers function of the API
	myapp.getPlayers(params, function(err, data) {

		// Execute callback that responds with return value
		callback(err, data);
	});
};

var getPlayer = function(params, callback) {

	// Call the getPlayers function of the API
	myapp.getPlayer(params, function(err, data) {

		// Execute callback that responds with return value
		callback(err, data);
	});
};

function sleep(milliSeconds) {
	var startTime = new Date().getTime();
	while (new Date().getTime() < startTime + milliSeconds);
}

// Test getPlayers
getPlayers({id: "1"}, function(err, data) {

	// Error found, do something with it
	if (err) {
		console.log(err);
	}
	else {
		// Send the data back to the browser
		console.log(data);
	}
});

getPlayer({id: "2"}, function(err, data) {

	// Error found, do something with it
	if (err) {
		console.log(err);
	}
	else {
		// Send the data back to the browser
		console.log(data);
	}
});