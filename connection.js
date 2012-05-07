var net = require("net"),
	util = require("util");

var counter = 1;

var conn = exports = module.exports = {};

conn.init = function(port) {
	var self = this;
	this.port = port;
	this.dummy = 10;
	console.log("counter: " + (++counter));
	console.log("dummy: " + (++this.dummy));
	this.connection = net.createConnection(this.port);

	this.connection.setEncoding('utf8');
	this.connection.on("error", function(connectionException) {
		if (connectionException.errno === "ECONNREFUSED") {
			util.log('ECONNREFUSED: Connection refused at port ' + self.port);
		}
		else {
			util.log(connectionException);
		}
	});

	//return this.connection;
};

conn.attachHandlers = function(handlers, callback) {

	this.connection.on("connect", function() {
		this.write(handlers.command);
	}).on("data", function(data) {
		callback(handlers.dataHandler(data));
	}).on('end', function() {
		util.log('DONE');
	});
};
