var MyApp = require("./myapp");

// Example of what a function would look like that a route called
var getPlayers = function(params) {

	var myapp = new MyApp();

	// Call the getPlayers function of the API
	myapp.getPlayers();

	// When call is complete and data has been returned, do something with it (aka send back to browser)
	myapp.on("complete", function(data) {
		console.log(data);
	});
};

getPlayers({});




