exports.findAll = function (params) {

	return {
		command: "<request><command>get_players</command></request>",
		dataHandler: function(data) {
			return "This will end up being a JSON string to send back to browser client";
		}
	};
};