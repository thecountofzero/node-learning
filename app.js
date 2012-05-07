var MyApp = require("./myapp");

var myapp = new MyApp();

myapp.getPlayers();
myapp.on("complete", function(data) {
	console.log(data);
});
