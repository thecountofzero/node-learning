var connection = require("./connection"),
	Player = require("./player"),
	EventEmitter = require("events").EventEmitter;

// Helpers
var complete = function(myapp, data) {
	myapp.responseData = data;
	myapp.emit("complete", data);
};

var port = 8080;

function MyApp() {

	this.responseData = "";
	connection.init(port);
}

MyApp.prototype = new EventEmitter();


MyApp.prototype.getPlayers = function(params) {
	var self = this;

	connection.attachHandlers(Player.findAll(params), function(data) {
		complete(self, data);
	});
};

module.exports = MyApp;

