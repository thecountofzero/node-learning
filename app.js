var MyApp = require("./myapp");

// Example of what a function would look like that a route called
var getPlayers = function(params) {

	var myapp = new MyApp();

	myapp.getPlayers();
	myapp.on("complete", function(data) {
		console.log(data);
	});
};

getPlayers({});




