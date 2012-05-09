var net = require("net"),
	util = require("util");

var port = 3000,
	connection,
	connected = false;
	queue = [];


function initializeConnection() {

	util.log("Initializing connection");
	connection = net.createConnection(port);

	// Set encoding
	connection.setEncoding('utf8');

	connection.on("connect", function() {
		connected = true;
	}).on("end", function() {
		connected = false;
	});
}

function processRequest(request, callback) {

	setTimeout(function() {

		if (!connected) {
			initializeConnection();
		}

		connection.on("error", function(connectionException) {

			// Check for connection refused error
			if (connectionException.errno === "ECONNREFUSED") {
				callback('ECONNREFUSED: Connection refused to CloudArray at port ' + port);
			}
			else {
				callback(connectionException.toString());
			}
		});

		if(true) {

			connection.write(request);
			connection.on("data", function(data) {

				// Execute our callback to process the data returned from the service
				callback(null, data);
			});
		}
    }, 1000);
}

function queued(request, cb) {

    function tick() {
        if (queue.length > 0) {
            var next = queue.shift();
            processRequest(next.request, function(err, result) {
                next.callback(err, result);
                tick();
            });
        }
    }

    queue.push({ request: request, callback: cb });

    if (queue.length === 1) {
        tick();
    }
}


exports.addRequest = function(request, callback) {

	queued(request, callback);
};




