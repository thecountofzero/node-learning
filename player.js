var connection = require("./connection");

var player = exports;

player.findAll = function (params, callback) {

	// Send the request
	connection.sendRequest("GET /upload HTTP/1.0\r\n\r\n", function(err, data) {

		// Do something with data such as convert it to the JSON string we want to send back

		callback(err, "This will end up being a JSON string to send back to the browser client");
	});

	return this;
};