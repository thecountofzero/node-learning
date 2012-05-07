var MyApp = require("./myapp");

var myapp = new MyApp();

myapp.doSomething();
myapp.on("complete", function(data) {
	console.log(data);
});
