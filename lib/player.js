var connection = require("./connection");

var player = exports;

player.findAll = function (params, callback) {

	// Send the request
	connection.sendRequest("<request><command>get_players</command></request>", function(err, data) {

		// Process and convert data to JSON
		var convertedData = data;

		callback(err, convertedData);
	});

	return this;
};

player.findOne = function ( params, callback) {

	// Send the request
	connection.sendRequest("<request><command>get_player</command><player_id>" + params.playerId + "</player_id></request>", function(err, data) {

		// Process and convert data to JSON
		var convertedData = data;

		callback(err, convertedData);
	});

	return this;
};