var connection = require("./connection"),
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

MyApp.prototype.doSomething = function() {

	// Do something
};

MyApp.prototype.foo = function(params) {
	var self = this;

	connection.attachHandlers({
		command: "some_command",
		dataHandler: function(data) {
			return "Some message...";
		}
	}, function(data) {
		complete(self, data);
	});
};

module.exports = MyApp;

