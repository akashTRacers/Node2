var fs = require("fs");



fs.readFile('abc.txt', function (err, data) {

   console.log(data.toString());

   				fs.readFile('pqr.txt', function (err, data1){
   					console.log(data1.toString());

   						fs.readFile('xyz.txt', function (err, data1){
   							console.log(data1.toString()); 
						});
				});
});

console.log("Program Ended");