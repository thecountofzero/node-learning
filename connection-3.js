var net = require("net"),
	util = require("util");

var port = 8080,
	connection = net.createConnection(port);

exports.init = function() {

	connection.setEncoding('utf8');
	connection.on("error", function(connectionException) {
		if (connectionException.errno === "ECONNREFUSED") {
			util.log('ECONNREFUSED: Connection refused to CloudArray at port ' + port);
		}
		else {
			util.log(connectionException);
		}
	});

	return connection;
};

exports.attachHandlers = function(handlers, callback) {

	connection.on("connect", function() {
		this.write(handlers.command);
	}).on("data", function(data) {
		callback(handlers.dataHandler(data));
	}).on('end', function() {
		util.log('DONE');
	});
};