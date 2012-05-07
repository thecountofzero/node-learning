var net = require("net"),
	util = require("util");

function Connection() {
	this.port = 8080;
	this.connection = init(this.port);

	function init(port) {

		connection = net.createConnection(port),
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
	}
}

Connection.prototype.attachHandlers = function(handlers, callback) {
	var self = this;

	connection.on("connect", function() {
		this.write(handlers.command);
	}).on("data", function(data) {
		callback(handlers.dataHandler(data));
	}).on('end', function() {
		util.log('DONE');
	});
};

module.exports = Connection;
