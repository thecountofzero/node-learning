var xml2js = require('xml2js'),
	connection = require("./connection");

var player = exports,
	parser = new xml2js.Parser();

player.findAll = function (params, callback) {

	// Send the request
	connection.addRequest("GET /players HTTP/1.0\r\n\r\n", function(err, data) {

		/*data = "<players><player><id>1</id><name>Ryan Braun</name><team>Brewers</team><homers>37</homers></player><player><id>2</id><name>Tim Lincecum</name><team>Giants</team><homers>37</homers></player></players>";

		// Process and convert data to JSON
		parser.parseString(data, function(err, result) {
			callback(err, JSON.stringify(result.player));
		});*/

		/*var players = [];
		players.push({id: "1", name: "Ryan Braun", team: "Brewers"});
		players.push({id: "2", name: "Tim Lincecum", team: "Giants"});
		players.push({id: "3", name: "King Felix", team: "Mariners"});
		players.push({id: "4", name: "Troy Tulowitzki", team: "Rockies"});

		callback(err, JSON.stringify(players));*/
		callback(err, data);

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